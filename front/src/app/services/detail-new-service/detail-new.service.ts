import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { NewI } from '../../interfaces/new.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailNewService {
  private id: string;

  public newSelectedData: NewI;
  public newSelectedDataSubject: Subject<any>;

  constructor(private http: HttpClient, private route: Router) {
    this.newSelectedDataSubject = new Subject<any>();
    this.getNewFromApi();
  }

  private getNewFromApi(): void {
    const splitUrl = this.route.url.split('/').filter(n => n !== '');

    this.http
    .get<any>(`http://localhost:9000/v1/${splitUrl[0]}/${splitUrl[1]}`)
    .pipe(map(newSelected => {
      return newSelected.response;
    }))
    .subscribe((data) => {
      this.newSelectedData = data;
      this.newSelectedOnChangeObservable();
    });
  }

  public newSelectedOnChangeObservable(): any{
    return this.newSelectedDataSubject.next(this.newSelectedData);
  }
}
