import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCategoriesComponent } from './liste-categories.component';

describe('ListeCategoriesComponent', () => {
  let component: ListeCategoriesComponent;
  let fixture: ComponentFixture<ListeCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCategoriesComponent]
    });
    fixture = TestBed.createComponent(ListeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
