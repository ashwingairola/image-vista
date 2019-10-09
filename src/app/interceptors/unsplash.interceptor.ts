import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '@imgvista/env';

@Injectable()
export class UnsplashInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: new HttpHeaders({
        'Accept-Version': 'v1',
        Authorization: `Client-ID ${env.unsplashAPIKey}`
      })
    });

    return next.handle(request);
  }
}
