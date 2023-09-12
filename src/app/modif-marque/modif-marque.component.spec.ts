import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMarqueComponent } from './modif-marque.component';

describe('ModifMarqueComponent', () => {
  let component: ModifMarqueComponent;
  let fixture: ComponentFixture<ModifMarqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifMarqueComponent]
    });
    fixture = TestBed.createComponent(ModifMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
