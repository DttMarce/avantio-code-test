import { Component, OnInit } from '@angular/core';

import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-feed-news',
  templateUrl: './feed-news.component.html',
  styleUrls: ['./feed-news.component.scss']
})
export class FeedNewsComponent implements OnInit {

  constructor(private newService: NewService) { }

  ngOnInit(): void {
    this.newService.getNews()
  }

}
