import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMagasinComponent } from './modif-magasin.component';

describe('ModifMagasinComponent', () => {
  let component: ModifMagasinComponent;
  let fixture: ComponentFixture<ModifMagasinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifMagasinComponent]
    });
    fixture = TestBed.createComponent(ModifMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
