import { Component } from '@angular/core';
import { of, from, interval, fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  constructor() {
    // 1. Observable using of()
    const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

    numbers$
      .pipe(map((value) => value * 3))
      .subscribe((value) => console.log(value));

    // 2. Interval Observable
    const interval$ = interval(10000);
    interval$.subscribe((val) => console.log('Stream ' + val));

    // 3. Click Event Observable
    const clicks$ = fromEvent(document, 'click');
    clicks$.subscribe((evt) => console.log('Mouse clicked', evt));

    // 4. Define an object called users
    const users = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 35 },
      { id: 4, name: 'Dave', age: 40 },
    ];

    // Convert users array into Observable
    const users$ = from(users);

    // Display all users
    users$.subscribe((user) => console.log(user));

    // Display users whose age is less than or equal to 30
    users$
      .pipe(filter((user) => user.age <= 30))
      .subscribe((user) => console.log(user));

    // Display users whose age is greater than 30
    // and convert name to uppercase
    users$
      .pipe(
        filter((user) => user.age > 30),
        map((user) => ({
          id: user.id,
          name: user.name.toUpperCase(),
          age: user.age,
        }))
      )
      .subscribe((user) => console.log(user));
  }
}
