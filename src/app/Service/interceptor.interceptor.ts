import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let reqUrl=environment.api
    request=request.clone({
      headers:request.headers.set("Authorization","Bearer " + localStorage.getItem("token")),
      url:reqUrl+""+request.url
    });
    return next.handle(request);
  }
}
