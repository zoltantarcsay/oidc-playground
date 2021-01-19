import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OidcConfig } from '../model/oidc-config';
import { ProxyService } from '../proxy.service';

@Component({
  selector: 'app-oidc-config',
  templateUrl: './oidc-config.component.html',
  styleUrls: [ './oidc-config.component.scss' ]
})
export class OidcConfigComponent implements OnInit {
  storageKey = 'oidcPlaygroundConfig';
  configEndpoint: string;
  @Input() config: OidcConfig = {} as OidcConfig;
  @Output() configChange = new EventEmitter<OidcConfig>();

  constructor(private proxyService: ProxyService) { }

  ngOnInit(): void {
    const config = localStorage.getItem(this.storageKey);
    if (config) {
      this.config = JSON.parse(config);
      this.configChange.emit(this.config);
    }

    this.configChange.subscribe(newConfig => {
      localStorage.setItem(this.storageKey, JSON.stringify(newConfig));
    });
  }

  async getOidcConfig(): Promise<void> {
    const { data } = await this.proxyService.request<void, OidcConfig>({
      method: 'GET',
      url: this.configEndpoint
    });
    this.config = { ...this.config, ...data };
    this.configChange.emit(this.config);
  }

  clear(): void {
    localStorage.removeItem(this.storageKey);
    this.config = {} as OidcConfig;
    this.configChange.emit(this.config);
  }

}
