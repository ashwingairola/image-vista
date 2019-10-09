import { TestBed } from '@angular/core/testing';

import { UnsplashInterceptor } from './unsplash.interceptor';

describe('UnsplashInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnsplashInterceptor = TestBed.get(UnsplashInterceptor);
    expect(service).toBeTruthy();
  });
});
