import { TestBed } from '@angular/core/testing';

import { DetailNewService } from './detail-new.service';

describe('DetailServiceService', () => {
  let service: DetailNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
