import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticlesCommandeComponent } from './liste-articles-commande.component';

describe('ListeArticlesCommandeComponent', () => {
  let component: ListeArticlesCommandeComponent;
  let fixture: ComponentFixture<ListeArticlesCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeArticlesCommandeComponent]
    });
    fixture = TestBed.createComponent(ListeArticlesCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
