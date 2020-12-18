import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss']
})
export class SecondaryButtonComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<boolean>;

  constructor() {
    this.buttonClicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.buttonClicked.emit();
  }
}
