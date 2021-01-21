import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  public showAddNewSidebar: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showAddNewSidebar = false;
  }

  showSidebarComponent(): void {
    this.showAddNewSidebar = !this.showAddNewSidebar;
  }

}
