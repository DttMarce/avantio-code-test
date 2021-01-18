import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor(private newService: NewService,) {
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
        const insertResult = this.newService.insertNewToNewspaper(this.newForm.form.value);
    }
  }
}
