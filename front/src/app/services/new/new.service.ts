import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewI } from '../../interfaces/new.interface';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ENewspaper } from 'src/app/enum/newspaper.enum';

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
