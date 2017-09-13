import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../app.settings';
import { HttpClient } from '../shared/helpers/http-client';

@Injectable()
export class KatzService {
  constructor(private http: HttpClient) {  }

  createKat(data){
    return this.http
    .post(`${AppSettings.API_URI}/katz`, data);
  }
}
