export interface OidcConfig {
  scopes_supported: string[];
  userinfo_endpoint: string;
  authorization_endpoint: string;
  token_endpoint: string;
  introspection_endpoint: string;
  client_id?: string;
  client_secret?: string;
  client_auth_method?: AUthMethod;
}

export type AUthMethod = 'client_secret_basic' | 'client_secret_post';
