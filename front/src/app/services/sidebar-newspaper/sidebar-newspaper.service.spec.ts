import { TestBed } from '@angular/core/testing';

import { SidebarNewspaperService } from './sidebar-newspaper.service';

describe('SidebarNewspaperService', () => {
  let service: SidebarNewspaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarNewspaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
