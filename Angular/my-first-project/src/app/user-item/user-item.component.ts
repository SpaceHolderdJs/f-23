import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/types';

      // переприсвоєння let a = 10; a = 15;
      // immutable concept (filter, map) filteredUsers = users.filter();
      // mutable [1,3], {} let obj = {a: 10}; obj.a = 100
      // users[i].name = "Oleg"

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent {
  @Input() user: UserInterface | null = null;
  @Input() usersList: UserInterface[] = [];

  onDeleteUser(user: UserInterface) {
    this.usersList.forEach(({ name, age }, i) => {
      if (name === user.name && age === user.age) this.usersList.splice(i, 1);
    });
  }
}
