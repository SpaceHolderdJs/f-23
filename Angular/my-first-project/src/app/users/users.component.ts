import { Component } from '@angular/core';
import { UserInterface } from 'src/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersList: UserInterface[] = [
    { name: 'Igor', age: 23 },
    { name: 'Oleg', age: 40 },
  ];
}
