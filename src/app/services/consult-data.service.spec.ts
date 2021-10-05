import { TestBed } from '@angular/core/testing';

import { ConsultDataService } from './consult-data.service';

describe('ConsultDataService', () => {
  let service: ConsultDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
