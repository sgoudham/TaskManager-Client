import { TestBed } from '@angular/core/testing';

import { WebRequestInterceptor } from './web-request-interceptor';

describe('WebRequestInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebRequestInterceptor = TestBed.get(WebRequestInterceptor);
    expect(service).toBeTruthy();
  });
});
