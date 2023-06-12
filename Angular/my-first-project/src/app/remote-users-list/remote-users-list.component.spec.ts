import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteUsersListComponent } from './remote-users-list.component';

describe('RemoteUsersListComponent', () => {
  let component: RemoteUsersListComponent;
  let fixture: ComponentFixture<RemoteUsersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteUsersListComponent]
    });
    fixture = TestBed.createComponent(RemoteUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
