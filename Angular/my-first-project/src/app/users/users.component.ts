import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/types';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor (private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.addUser({name: "Igor", age: 11});
    console.log(this.usersService.users, "!!!!USERS FROM SERVICE");
  }

  usersList: UserInterface[] = [
    { name: 'Igor', age: 23 },
    { name: 'Oleg', age: 40 },
  ];
}
