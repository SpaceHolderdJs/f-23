import { Injectable } from '@angular/core';
import { UserInterface } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: UserInterface[] = [];

  // constructor() {}

  addUser(user: UserInterface) {
    this.users.push(user);
  }


}
