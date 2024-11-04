import { TestBed } from '@angular/core/testing';

import { CarroService } from './lista-carros.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListaCarrosService', () => {
  let service: CarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarroService]

    });
    service = TestBed.inject(CarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
