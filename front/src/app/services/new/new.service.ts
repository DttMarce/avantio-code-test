import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewI } from '../../interfaces/new.interface';

@Injectable({
  providedIn: 'root'
})

export class NewService {

  constructor(private http: HttpClient) { }

  public getNews(): any {
    this.http
    .get('http://localhost:9000/v1/el-pais/')
    .subscribe (news => {
      console.log(news);
    })
  }
}
