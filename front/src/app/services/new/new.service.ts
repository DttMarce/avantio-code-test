import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewI } from '../../interfaces/new.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewService {
  constructor(private http: HttpClient) { }

  public getNews(): Observable<any> {
    return this.http
    .get<any>('http://localhost:9000/v1/el-pais/');
  }
}
