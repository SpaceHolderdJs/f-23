import { Injectable } from '@angular/core';
import { RemoteUserInterface, UserInterface } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users: RemoteUserInterface[] = [];
  private API_URL: string = 'https://jsonplaceholder.typicode.com/users';

  // constructor() {}

  async getUsers() {
    const rawData = await fetch(this.API_URL);
    const data = await rawData.json();
    this.users = data;
    console.log(data, 'users from server');
  }

  async addUser(user: RemoteUserInterface): Promise<RemoteUserInterface[]> {
    const response = await fetch(this.API_URL, {
      body: JSON.stringify(user),
      method: 'POST',
    });

    const data = await response.json();

    if (data.id) {
      this.users.push(user);
    }

    return this.users;
  }

  updateUser() {}
}
