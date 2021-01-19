import { Component, Input, OnInit } from '@angular/core';
import { AccessToken } from '../model/access-token';
import { OidcConfig } from '../model/oidc-config';
import { ProxyService } from '../proxy.service';

@Component({
  selector: 'app-oidc-userinfo',
  templateUrl: './oidc-userinfo.component.html',
  styleUrls: [ './oidc-userinfo.component.scss' ]
})
export class OidcUserinfoComponent implements OnInit {
  @Input() config: OidcConfig = {} as OidcConfig;
  @Input() accessToken: AccessToken;
  userInfo: any;

  constructor(private proxyService: ProxyService) { }

  ngOnInit(): void {
  }

  async getUserInfo(): Promise<void> {
    const { userinfo_endpoint } = this.config;
    const { access_token } = this.accessToken;
    const { data } = await this.proxyService.request({
      method: 'POST',
      url: userinfo_endpoint,
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    this.userInfo = data;
  }
}
