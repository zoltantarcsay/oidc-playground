export interface ProxyResponse<T = any> {
  data: T;
  headers: { [ key: string ]: string };
  status: number;
  statusText: string;
  error?: any;
}
