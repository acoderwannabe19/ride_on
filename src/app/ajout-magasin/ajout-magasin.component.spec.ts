import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMagasinComponent } from './ajout-magasin.component';

describe('AjoutMagasinComponent', () => {
  let component: AjoutMagasinComponent;
  let fixture: ComponentFixture<AjoutMagasinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutMagasinComponent]
    });
    fixture = TestBed.createComponent(AjoutMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
