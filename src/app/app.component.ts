import { Component, OnInit } from '@angular/core';
import { MyOrderByPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private orderPipe: MyOrderByPipe) {
    console.log("order by digit");
    console.log(this.orderPipe.transform(this.items, 'digit'));
  } 

  items = [
    { id: "1", name: "sravan", age: 24 },
    { id: "2", name: "sumangth", age: 25 },
    { id: "3", name: "naveen", age: 26 },
  ];

  order = "id";
  reverse = false;

}
