import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommandesComponent } from './liste-commandes.component';

describe('ListeCommandesComponent', () => {
  let component: ListeCommandesComponent;
  let fixture: ComponentFixture<ListeCommandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCommandesComponent]
    });
    fixture = TestBed.createComponent(ListeCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
