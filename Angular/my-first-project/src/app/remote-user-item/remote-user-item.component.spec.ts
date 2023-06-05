import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteUserItemComponent } from './remote-user-item.component';

describe('RemoteUserItemComponent', () => {
  let component: RemoteUserItemComponent;
  let fixture: ComponentFixture<RemoteUserItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteUserItemComponent]
    });
    fixture = TestBed.createComponent(RemoteUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
