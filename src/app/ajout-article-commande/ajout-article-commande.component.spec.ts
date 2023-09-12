import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutArticleCommandeComponent } from './ajout-article-commande.component';

describe('AjoutArticleCommandeComponent', () => {
  let component: AjoutArticleCommandeComponent;
  let fixture: ComponentFixture<AjoutArticleCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutArticleCommandeComponent]
    });
    fixture = TestBed.createComponent(AjoutArticleCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
