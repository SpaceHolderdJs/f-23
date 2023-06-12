import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedSectionComponent } from './liked-section.component';

describe('LikedSectionComponent', () => {
  let component: LikedSectionComponent;
  let fixture: ComponentFixture<LikedSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikedSectionComponent]
    });
    fixture = TestBed.createComponent(LikedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
