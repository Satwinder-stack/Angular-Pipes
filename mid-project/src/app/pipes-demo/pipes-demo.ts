import {
  DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe, JsonPipe, TitleCasePipe
} from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe, JsonPipe, TitleCasePipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrls: ['./pipes-demo.css'],
})
export class PipesDemo implements OnInit {
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  presentDate = new Date();

  time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date())
  );

  price: number = 20000;

  Fruits: string[] = [
    'Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'
  ];

  completionRate: number = 0.75;

  student = {
    id: 101,
    name: 'Satwinder Jeerh',
    course: 'Angular',
    active: true
  };


  ngOnInit(): void {
    console.log('PipesDemo initialized');
  }
}


