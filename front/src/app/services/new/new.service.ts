import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ENewspaper } from 'src/app/enum/newspaper.enum';
import { NewI } from 'src/app/interfaces/new.interface';

@Injectable({
  providedIn: 'root'
})

export class NewService {
  public newsPaperToSelect: string[] = [
    ENewspaper.ELMUNDO,
    ENewspaper.ELPAIS
  ];
  public newspaperSelected: string;
  public newspaperSelectedSubj: Subject<any>;
  public newsList: any[];

  public newsListSubject: Subject<any>;
  public newsListCountSubject: Subject<any>;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


  constructor(private http: HttpClient) {
    this.newspaperSelected = ENewspaper.ELPAIS;
    this.newsListSubject = new Subject<any>();
    this.newspaperSelectedSubj = new Subject<any>();
    this.newsListCountSubject = new Subject<any>();
    this.getNewsFromApi();
  }

  private getNewsFromApi(): void {
    this.http
    .get<any>(`http://localhost:9000/v1/${this.newspaperSelected}/`)
    .pipe(map(news => {
      return news.response;
    }))
    .subscribe((data) => {
      this.newsList = data;
      this.newsOnChangeObservable();
      this.newspaperOnChangeObservable();
      this.newsCountOnChangeObservable();
    });
  }

  public insertNewToNewspaper(newspaperNew: NewI): boolean {
    this.http.post<any>(`http://localhost:9000/v1/${this.newspaperSelected}`, newspaperNew, this.httpOptions).subscribe(
      result => {
        this.newsList.push(result.response);
        this.newsOnChangeObservable();
        this.newsCountOnChangeObservable();
      },
      error => {
        console.log(error);
        return false;
      }
    );
    return true;
  }

  public removeNew(idNew: string): boolean {
    this.http.delete<any>(`http://localhost:9000/v1/${idNew}`, this.httpOptions).subscribe(
      result => {
        this.newsList = this.newsList.filter(newFromList => newFromList._id !== idNew);
        this.newsOnChangeObservable();
        this.newsCountOnChangeObservable();
      },
      error => {
        console.log(error);
        return false;
      }
    );
    return true;
  }

  public selectNewsPaper(selectedNewsPaper): void {
    this.newspaperSelected = selectedNewsPaper;
    this.getNewsFromApi();
  }

  public newsOnChangeObservable(): any{
    return this.newsListSubject.next(this.newsList);
  }

  public newspaperOnChangeObservable(): any{
    return this.newspaperSelectedSubj.next(this.newspaperSelected);
  }

  public newsCountOnChangeObservable(): any{
    return this.newsListCountSubject.next(this.newsList.length);
  }
}
