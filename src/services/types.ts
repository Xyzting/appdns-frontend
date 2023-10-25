export interface StatusCode<T> {
  statusCode: number;
  data: T[];
}

export interface CommonApiResult<D = any> {
  data?: D;
  msg?: string;
  status?: string;
}