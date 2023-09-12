import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitsComponent } from './liste-produits.component';

describe('ListeProduitsComponent', () => {
  let component: ListeProduitsComponent;
  let fixture: ComponentFixture<ListeProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProduitsComponent]
    });
    fixture = TestBed.createComponent(ListeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
