import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OidcConfigComponent } from './oidc-config/oidc-config.component';
import { OidcAuthorizeComponent } from './oidc-authorize/oidc-authorize.component';
import { OidcAccessTokenComponent } from './oidc-access-token/oidc-access-token.component';
import { OidcUserinfoComponent } from './oidc-userinfo/oidc-userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    OidcConfigComponent,
    OidcAuthorizeComponent,
    OidcAccessTokenComponent,
    OidcUserinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
