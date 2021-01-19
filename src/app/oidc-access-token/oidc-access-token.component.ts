import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccessToken } from '../model/access-token';
import { OidcConfig } from '../model/oidc-config';
import { ProxyService } from '../proxy.service';

@Component({
  selector: 'app-oidc-access-token',
  templateUrl: './oidc-access-token.component.html',
  styleUrls: [ './oidc-access-token.component.scss' ]
})
export class OidcAccessTokenComponent implements OnInit {
  @Input() config: OidcConfig = {} as OidcConfig;
  @Input() code: string;
  accessToken: AccessToken;
  @Output() accessTokenChange = new EventEmitter<AccessToken>();

  constructor(private proxyService: ProxyService) { }

  ngOnInit(): void {
  }

  async getAccessToken(): Promise<void> {
    const { token_endpoint, client_id, client_secret } = this.config;
    const redirectUri = location.href.replace(/\?.*/, '');
    const { data } = await this.proxyService.request<string, AccessToken>({
      method: 'POST',
      url: token_endpoint,
      data: 'grant_type=authorization_code' +
        `&client_id=${client_id}` +
        `&client_secret=${client_secret}` +
        `&redirect_uri=${redirectUri}` +
        `&code=${this.code}`
    });
    this.accessToken = data;
    this.accessTokenChange.emit(this.accessToken);
  }

}
