import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPersonneComponent } from './ajout-personne.component';

describe('AjoutPersonneComponent', () => {
  let component: AjoutPersonneComponent;
  let fixture: ComponentFixture<AjoutPersonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutPersonneComponent]
    });
    fixture = TestBed.createComponent(AjoutPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
