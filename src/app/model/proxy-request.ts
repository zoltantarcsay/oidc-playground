export interface ProxyRequest<T = any> {
  method: string;
  url: string;
  data?: T;
  headers?: { [ key: string ]: string };
}
