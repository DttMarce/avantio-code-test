import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNewspaperComponent } from './sidebar-newspaper.component';

describe('SidebarNewspaperComponent', () => {
  let component: SidebarNewspaperComponent;
  let fixture: ComponentFixture<SidebarNewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNewspaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
