import { Component, OnInit } from '@angular/core';
import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-sidebar-newspaper',
  templateUrl: './sidebar-newspaper.component.html',
  styleUrls: ['./sidebar-newspaper.component.scss']
})
export class SidebarNewspaperComponent implements OnInit {
  public newsPaperToSelect: string[];

  constructor(private newService: NewService) { }

  ngOnInit(): void {
    this.newsPaperToSelect = this.newService.newsPaperToSelect;
  }

}
