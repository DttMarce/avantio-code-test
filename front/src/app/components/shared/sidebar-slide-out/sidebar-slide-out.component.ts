import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-slide-out',
  templateUrl: './sidebar-slide-out.component.html',
  styleUrls: ['./sidebar-slide-out.component.scss']
})
export class SidebarSlideOutComponent implements OnInit {
  @Output() overlayClicked: EventEmitter<boolean>;

  constructor() {
    this.overlayClicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onOverlayClick(): void {
    this.overlayClicked.emit();
  }
}
