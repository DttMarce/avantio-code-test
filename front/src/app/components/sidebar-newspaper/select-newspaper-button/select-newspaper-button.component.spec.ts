import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNewspaperButtonComponent } from './select-newspaper-button.component';

describe('SelectNewspaperButtonComponent', () => {
  let component: SelectNewspaperButtonComponent;
  let fixture: ComponentFixture<SelectNewspaperButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNewspaperButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNewspaperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
