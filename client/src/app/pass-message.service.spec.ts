import { TestBed } from '@angular/core/testing';

import { PassMessageService } from './pass-message.service';

describe('PassMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassMessageService = TestBed.get(PassMessageService);
    expect(service).toBeTruthy();
  });
});
