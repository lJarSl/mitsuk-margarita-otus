import { TestBed } from '@angular/core/testing';

import { VocabularService } from './vocabular.service';

describe('VocabularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VocabularService = TestBed.get(VocabularService);
    expect(service).toBeTruthy();
  });
});
