import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from 'src/types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  @Input() usersList: UserInterface[] = [];

  // clearUserList = this.usersList.filter((user) => typeof user === "object" );

}
