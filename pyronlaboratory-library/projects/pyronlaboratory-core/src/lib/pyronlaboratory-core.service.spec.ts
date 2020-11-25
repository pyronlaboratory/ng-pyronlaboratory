import { TestBed } from '@angular/core/testing';

import { PyronlaboratoryCoreService } from './pyronlaboratory-core.service';

describe('PyronlaboratoryCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PyronlaboratoryCoreService = TestBed.get(PyronlaboratoryCoreService);
    expect(service).toBeTruthy();
  });
});
