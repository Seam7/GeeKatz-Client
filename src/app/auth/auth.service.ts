import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../app.settings';

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  login(data){
    return this.http
    .post(`${AppSettings.API_URI}/user_token`, data);
  }
}
