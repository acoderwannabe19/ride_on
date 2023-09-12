import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStocksComponent } from './liste-stocks.component';

describe('ListeStocksComponent', () => {
  let component: ListeStocksComponent;
  let fixture: ComponentFixture<ListeStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeStocksComponent]
    });
    fixture = TestBed.createComponent(ListeStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
