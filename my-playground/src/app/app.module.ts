import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemsComponent } from './user-items/user-items.component';
import { UserService } from './user.service';
import { Observable, interval, map } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

const p = new Promise((resolve, reject) => {
  // console.log("Promise invoked!");

  setTimeout(() => {
    resolve(123)
  }, 3000);
  
})

p.then((data) => {
  // console.log("Promise", data);
})

// const o = new Observable((observer) => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.next(4);
// })

// o.subscribe((data) => {
//   console.log("From Observer", data);
  
// })

// const interval = (intervalValue: number) => {
//   const o = new Observable<Number>((observer) => {
//    let counter = 0;
//    const timer = setInterval(() => {
//       observer.next(counter++);
//       return () => {
//         clearInterval(timer)
//       }
//     }, intervalValue)
//   });
//   return o
// }

// interval(3000).subscribe((data)=>{
//   console.log("from interval", data);
  
// });

const stream$ = interval(2000).pipe(map(x => x*2))
// .subscribe(data => console.log("From Stream",data))

stream$.subscribe({
  next: (data) => console.log("From Stream",data),
  error: (error) => console.error("Err: ", error),
  complete: () => console.log("The stream has completed"),
    
})
