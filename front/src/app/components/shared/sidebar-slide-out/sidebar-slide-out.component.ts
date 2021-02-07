import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewI } from 'src/app/interfaces/new.interface';
import { DetailNewService } from 'src/app/services/detail-new-service/detail-new.service';

import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-sidebar-slide-out',
  templateUrl: './sidebar-slide-out.component.html',
  styleUrls: ['./sidebar-slide-out.component.scss']
})

export class SidebarSlideOutComponent implements OnInit {
  @Input() actionType: string;
  @Input() newToEdit: NewI;
  @Output() overlayClicked: EventEmitter<boolean>;
  @ViewChild('newForm') newForm: NgForm;
  public body: string;

  constructor(
    private detailNewService: DetailNewService,
    private newService: NewService
  ) {
    this.overlayClicked = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.newToEdit);
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
        const editResult = this.detailNewService.editNewToNewspaper(this.newForm.form.value);
        break;
    }
  }
}
