import { TestBed } from '@angular/core/testing';

import { CookeatService } from './cookeat.service';

describe('CookeatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookeatService = TestBed.get(CookeatService);
    expect(service).toBeTruthy();
  });
});
