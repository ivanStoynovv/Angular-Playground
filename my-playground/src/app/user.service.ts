import { Injectable, OnDestroy } from '@angular/core';
import { User } from './types/user';

@Injectable()
export class UserService implements OnDestroy {

  users = [
    { name: "Pesho", age: 10 },
    { name: "Gosho", age: 98 },
    { name: "Petya", age: 30 },
    { name: "Nelly", age: 34 },
  ] as User[];

  ngOnDestroy(): void {
      
  }

  // constructor(private cd: ChangeDetectorRef) {
  //   setTimeout(() => {
  //     this.title = "Changed from change detector";
  //     this.cd.detectChanges()     
  //   }, 3000)
  // }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value),
    }
    this.users.push(user)
  }
}
