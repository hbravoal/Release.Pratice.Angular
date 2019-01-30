import { TestBed } from '@angular/core/testing';

import { APINetCommerceService } from './apinet-commerce.service';

describe('APINetCommerceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APINetCommerceService = TestBed.get(APINetCommerceService);
    expect(service).toBeTruthy();
  });
});
