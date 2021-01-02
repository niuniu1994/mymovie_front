import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = this.authService.getToken();
    if (token){
      console.log(token);
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization: token
        }
      })
      return next.handle(tokenizedReq);
    }

    return next.handle(req);
  }

}
