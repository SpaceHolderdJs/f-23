import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/types';

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
