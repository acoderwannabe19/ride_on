import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutStockComponent } from './ajout-stock.component';

describe('AjoutStockComponent', () => {
  let component: AjoutStockComponent;
  let fixture: ComponentFixture<AjoutStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutStockComponent]
    });
    fixture = TestBed.createComponent(AjoutStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
