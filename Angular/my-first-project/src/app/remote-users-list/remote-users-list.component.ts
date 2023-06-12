import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { RemoteUserInterface } from 'src/types';

@Component({
  selector: 'app-remote-users-list',
  templateUrl: './remote-users-list.component.html',
  styleUrls: ['./remote-users-list.component.css']
})
export class RemoteUsersListComponent implements OnInit {
  constructor(public usersService: UsersService) {}
  // public users: RemoteUserInterface[] = this.usersService.users;
  fields: string[] | null = null;

  formData: RemoteUserInterface | any = {
    name: "",
    email: "",
    username: "",
    website: "",
    phone: "",
    id: 0,
    address: "",
    company: ""
  };

  ngOnInit() {
    this.usersService.getUsers().then(() => {
      // this.users = this.usersService.users;
      console.log(this.usersService.users, "!!!!");
      this.fields = Object.keys(this.usersService.users[0])
    });
  }

  onInputChange(e: any) {
    this.formData[e.target.name] = e.target.value;
  }

  onCreateButtonClick() {
    this.usersService.addUser(this.formData).then((updatedUsers) => {
      console.log(updatedUsers, "users after update");

      this.formData = {
        name: "",
        email: "",
        username: "",
        website: "",
        phone: "",
        id: 0,
        address: "",
        company: ""
      }
    });
  }
}
