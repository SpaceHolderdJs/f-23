import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomFilmPickerComponent } from './random-film-picker.component';

describe('RandomFilmPickerComponent', () => {
  let component: RandomFilmPickerComponent;
  let fixture: ComponentFixture<RandomFilmPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomFilmPickerComponent]
    });
    fixture = TestBed.createComponent(RandomFilmPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
