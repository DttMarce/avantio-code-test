import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-principal-button',
  templateUrl: './principal-button.component.html',
  styleUrls: ['./principal-button.component.scss']
})
export class PrincipalButtonComponent implements OnInit {
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
