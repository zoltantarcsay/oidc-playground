import { Component, Input, OnInit } from '@angular/core';
import { AccessToken } from '../model/access-token';
import { OidcConfig } from '../model/oidc-config';
import { ProxyService } from '../proxy.service';

@Component({
  selector: 'app-oidc-introspection',
  templateUrl: './oidc-introspection.component.html',
  styleUrls: [ './oidc-introspection.component.scss' ]
})
export class OidcIntrospectionComponent implements OnInit {
  @Input() config: OidcConfig = {} as OidcConfig;
  @Input() accessToken: AccessToken;
  response: any;

  constructor(private proxyService: ProxyService) { }

  ngOnInit(): void {
  }

  async getIdToken(): Promise<void> {
    const { introspection_endpoint, client_id, client_secret } = this.config;
    const { access_token } = this.accessToken;
    const { data } = await this.proxyService.request({
      method: 'POST',
      url: introspection_endpoint,
      data: `client_id=${client_id}` +
        `&client_secret=${client_secret}` +
        `&token=${access_token}`
      // headers: {
      //   Authorization: `Bearer ${access_token}`
      // }
    });
    this.response = data;
  }
}
