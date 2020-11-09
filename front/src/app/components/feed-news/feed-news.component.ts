import { Component, OnInit } from '@angular/core';
import { NewI } from 'src/app/interfaces/new.interface';

import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-feed-news',
  templateUrl: './feed-news.component.html',
  styleUrls: ['./feed-news.component.scss']
})
export class FeedNewsComponent implements OnInit {
  public newsToShow: NewI[];
  public pathSelectedNewspaper: string;

  constructor(private newService: NewService) {}

  ngOnInit(): void {
    this.newService.newsListSubject.asObservable().subscribe((data) => {
      this.newsToShow = data;
    });

    this.newService.newspaperSelectedSubj.asObservable().subscribe((newsPaperSelected) => {
      this.pathSelectedNewspaper = `../../../assets/img/${newsPaperSelected}-logo.png`;
    });
  }

}
