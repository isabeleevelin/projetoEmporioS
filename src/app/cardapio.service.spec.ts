import { TestBed } from '@angular/core/testing';

import { CardapioService } from './Services/cardapio.service';

describe('CardapioService', () => {
  let service: CardapioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardapioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
