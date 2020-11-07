import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewI } from '../../interfaces/new.interface';
import { Observable } from 'rxjs';
import { ENewspaper } from 'src/app/enum/newspaper.enum';

@Injectable({
  providedIn: 'root'
})

export class NewService {
  private newsPaperSelected: string;
  public newsPaperToSelect: string[] = [
    ENewspaper.ELMUNDO,
    ENewspaper.ELPAIS
  ];

  constructor(private http: HttpClient) {
    this.newsPaperSelected = ENewspaper.ELPAIS;
  }

  public getNews(): Observable<any> {
    return this.http
    .get<NewI[]>(`http://localhost:9000/v1/${this.newsPaperSelected}/`);
  }

  public selectNewsPaper(selectedNewsPaper): void {
    console.log("hi");
    this.newsPaperSelected = selectedNewsPaper;
    this.getNews();
  }
}
