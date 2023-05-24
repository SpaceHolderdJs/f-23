import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/types';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() user: UserInterface | null = null;
}
