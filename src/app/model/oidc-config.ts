export interface OidcConfig {
  scopes_supported: string[];
  userinfo_endpoint: string;
  authorization_endpoint: string;
  token_endpoint: string;
  client_id?: string;
  client_secret?: string;
}
