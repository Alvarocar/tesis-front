import { HttpClient } from "@angular/common/http";
import { configApi } from "../api/config.api";

export class Request {
  private config: typeof configApi
  private http: HttpClient
  constructor(
    http: HttpClient,
    config = configApi,
  ) {
    this.config = config
    this.http = http
  }

  //TODO: make posible to obtain the string value from config object
  private getPath(path: string) {

  }

  private getFullUrl(api: string): string {
    return this.config.base_url.concat(api)
  }

  get(api: string, options: object = {}) {
    return this.http.get(this.getFullUrl(api), options)
  }

  post(api: string, body: object = {}, options: object = {}) {
    return this.http.post(this.getFullUrl(api), body, options)
  }

  patch(api: string, body: object = {}, options: object = {}) {
    return this.http.patch(this.getFullUrl(api), body, options)
  }

  put(api: string, body: object = {}, options: object = {}) {
    return this.http.patch(this.getFullUrl(api), body, options)
  }

  delete(api: string, options: object = {}) {
    return this.http.delete(this.getFullUrl(api), options)
  }
}
