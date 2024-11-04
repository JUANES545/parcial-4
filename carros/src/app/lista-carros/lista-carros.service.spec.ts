import { TestBed } from '@angular/core/testing';

import { ListaCarrosService } from './lista-carros.service';

describe('ListaCarrosService', () => {
  let service: ListaCarrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCarrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
