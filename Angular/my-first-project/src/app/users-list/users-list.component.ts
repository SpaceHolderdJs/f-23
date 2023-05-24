import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: UserInterface[] = [{name: "Igor", age: 23}, {name: "Oleg", age: 40}];

  ngOnInit() {
    
  }

}
