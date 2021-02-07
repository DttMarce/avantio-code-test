import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  public showNewSidebar: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showNewSidebar = false;
  }

  showSidebarComponent(): void {
    this.showNewSidebar = !this.showNewSidebar;
  }

}
