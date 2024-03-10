import { ChangeDetectorRef, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-playground';

  constructor(public userService: UserService){}

  setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement){
    this.userService.addUser(inputName, inputAge)
  }
}
