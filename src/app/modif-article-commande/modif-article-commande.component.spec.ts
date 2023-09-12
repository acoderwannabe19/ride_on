import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifArticleCommandeComponent } from './modif-article-commande.component';

describe('ModifArticleCommandeComponent', () => {
  let component: ModifArticleCommandeComponent;
  let fixture: ComponentFixture<ModifArticleCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifArticleCommandeComponent]
    });
    fixture = TestBed.createComponent(ModifArticleCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
