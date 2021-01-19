import { Component, OnInit } from '@angular/core';
import { AccessToken } from './model/access-token';
import { OidcConfig } from './model/oidc-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  response: any;
  config: OidcConfig = {} as OidcConfig;
  state: string;
  code: string;
  accessToken: AccessToken;

  async ngOnInit(): Promise<void> {
    this.state = Math.random().toString(16).substr(2, 16);
    this.code = location.search.match(/code=([^&]*)/)?.[ 1 ];
  }

}
