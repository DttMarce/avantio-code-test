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
  public newspaperSelected: string;
  public pathImageSelectedNewspaper: string;

  constructor(private newService: NewService) {
    this.newsToShow = this.newService.newsList;
    this.newspaperSelected = this.newService.newspaperSelected;
    this.pathImageSelectedNewspaper = `../../../assets/img/${this.newspaperSelected}-logo.png`;
  }

  ngOnInit(): void {
    this.newService.newsListSubject.asObservable().subscribe((data) => {
      this.newsToShow = data;
    });

    this.newService.newspaperSelectedSubj.asObservable().subscribe((newspaperSelected) => {
      this.newspaperSelected = newspaperSelected;
      this.pathImageSelectedNewspaper = `../../../assets/img/${newspaperSelected}-logo.png`;
    });
  }

}
