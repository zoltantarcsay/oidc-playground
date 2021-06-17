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
  idToken: any[];
  @Output() accessTokenChange = new EventEmitter<AccessToken>();

  constructor(private proxyService: ProxyService) { }

  ngOnInit(): void {
  }

  async getAccessToken(): Promise<void> {
    const { token_endpoint, client_id, client_secret, client_auth_method } = this.config;
    const redirectUri = location.href.replace(/\?.*/, '');
    const headers: any = {};

    if (client_auth_method === 'client_secret_basic') {
      headers.authorization = `Basic ${btoa(`${client_id}:${client_secret}`)}`;
    }

    let requestData = 'grant_type=authorization_code' +
      `&redirect_uri=${redirectUri}` +
      `&code=${this.code}`;

    if (client_auth_method === 'client_secret_post') {
      requestData += `&client_id=${client_id}&client_secret=${client_secret}`;
    }

    const { data } = await this.proxyService.request<string, AccessToken>({
      headers,
      method: 'POST',
      url: token_endpoint,
      data: requestData
    });
    this.accessToken = data;
    this.idToken = this.toIdToken(data.id_token);
    this.accessTokenChange.emit(this.accessToken);
  }

  toIdToken(jwt: string): any[] {
    return jwt
      ?.split('.')
      .slice(0, 2)
      .map(part => atob(part))
      .map(decoded => JSON.parse(decoded));
  }

}
