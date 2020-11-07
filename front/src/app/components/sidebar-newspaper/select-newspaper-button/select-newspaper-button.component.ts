import { Component, Input, OnInit } from '@angular/core';
import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-select-newspaper-button',
  templateUrl: './select-newspaper-button.component.html',
  styleUrls: ['./select-newspaper-button.component.scss']
})
export class SelectNewspaperButtonComponent implements OnInit {
  @Input() newsPaper: string;

  constructor(private newService: NewService) { }

  ngOnInit(): void {}

  selectNewspaper(newspaperSelected: string): void {
    this.newService.selectNewsPaper(newspaperSelected);
  }
}
