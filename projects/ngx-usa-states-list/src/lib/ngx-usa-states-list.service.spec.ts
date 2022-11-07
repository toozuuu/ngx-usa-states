import { TestBed } from '@angular/core/testing';

import { NgxUsaStatesListService } from './ngx-usa-states-list.service';

describe('NgxUsaStatesListService', () => {
  let service: NgxUsaStatesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUsaStatesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
