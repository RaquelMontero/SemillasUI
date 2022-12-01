import { TestBed } from '@angular/core/testing';

import { DomainhelperService } from './domainhelper.service';

describe('DomainhelperService', () => {
  let service: DomainhelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainhelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
