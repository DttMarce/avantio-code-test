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

  constructor(private newService: NewService) { }

  ngOnInit(): void {
    this.newService.getNews().subscribe(news => {
      this.newsToShow = news.response;
      this.newsToShow = this.newsToShow.slice(0, 10);
    });
  }

}
