import { TestBed } from '@angular/core/testing';

import { DadosRemediosService } from './dados-remedios.service';

describe('DadosRemediosService', () => {
  let service: DadosRemediosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosRemediosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
