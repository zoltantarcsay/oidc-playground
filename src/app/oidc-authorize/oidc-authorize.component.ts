import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { OidcConfig } from '../model/oidc-config';

@Component({
  selector: 'app-oidc-authorize',
  templateUrl: './oidc-authorize.component.html',
  styleUrls: [ './oidc-authorize.component.scss' ]
})
export class OidcAuthorizeComponent implements OnChanges {
  @Input() config: OidcConfig = {} as OidcConfig;
  @Input() state: string;
  scope = 'openid profile';
  url: string;
  formattedUrl: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.setUrl();
  }

  setUrl(): void {
    const { authorization_endpoint, client_id }: OidcConfig = this.config;
    const redirectUri = location.href.replace(/\?.*/, '');
    this.url = `${authorization_endpoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${this.scope}&response_type=code&state=${this.state}`;
    this.formattedUrl = this.url.replace(/([\\?&])/g, '\n\t$1');
  }

}
