import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-circle',
  templateUrl: './button-circle.component.html',
  styleUrls: ['./button-circle.component.scss']
})
export class ButtonCircleComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<boolean>;
  @Input() icon: string;

  constructor() {
    this.buttonClicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.buttonClicked.emit();
  }
}
