import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/types';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-creation-form',
  templateUrl: './user-creation-form.component.html',
  styleUrls: ['./user-creation-form.component.css'],
})
export class UserCreationFormComponent {
  @Input() usersList: UserInterface[] = [];

  constructor (private usersService: UsersService) {}

  name: string = '';
  age: number = 0;
  emptyAge = "";

  onNameChange(e: any) {
    this.name = e.target.value;
  }

  onAgeChange(e: any) {
    this.age = e.target.value;
  }

  onAddUser() {
    this.usersList.push({ name: this.name, age: this.age });

    this.name = "";
    this.age = 0;

  }
}
