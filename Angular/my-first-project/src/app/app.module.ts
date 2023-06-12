import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserCreationFormComponent } from './user-creation-form/user-creation-form.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { RemoteUsersListComponent } from './remote-users-list/remote-users-list.component';
import { RemoteUserItemComponent } from './remote-user-item/remote-user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UsersListComponent,
    UserItemComponent,
    UserCreationFormComponent,
    UsersComponent,
    RemoteUsersListComponent,
    RemoteUserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
