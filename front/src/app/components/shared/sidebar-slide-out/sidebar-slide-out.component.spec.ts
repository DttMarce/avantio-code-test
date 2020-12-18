import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSlideOutComponent } from './sidebar-slide-out.component';

describe('SidebarSlideOutComponent', () => {
  let component: SidebarSlideOutComponent;
  let fixture: ComponentFixture<SidebarSlideOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSlideOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSlideOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
