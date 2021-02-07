import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DetailNewService } from 'src/app/services/detail-new-service/detail-new.service';

import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-sidebar-slide-out',
  templateUrl: './sidebar-slide-out.component.html',
  styleUrls: ['./sidebar-slide-out.component.scss']
})

export class SidebarSlideOutComponent implements OnInit {
  @Output() overlayClicked: EventEmitter<boolean>;
  @ViewChild('newForm') newForm: NgForm;
  @Input() actionType: string;
  public body: string;

  constructor(
    private newService: NewService,
    private detailNewService: DetailNewService
  ) {
    this.overlayClicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onOverlayClick(): void {
    this.overlayClicked.emit();
  }

  onSubmit(): void {
    switch (this.actionType) {
      case 'add-new':
        const insertedResult = this.newService.insertNewToNewspaper(this.newForm.form.value);
        break;
      case 'edit-new':
        const editResult = this.detailNewService.editNewToNewspaper();
        break;
    }
  }
}
