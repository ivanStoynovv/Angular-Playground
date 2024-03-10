import { Component, Input } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent {
@Input("user") user = {} as User;
}
