import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dateview',
  templateUrl: './dateview.component.html',
  styleUrls: ['./dateview.component.css']
})
export class DateviewComponent implements OnInit {

  hour:number;

  date:Date;
  
  constructor() { }

  ngOnInit() {
  }
  //Do reservation for this hour and Date
  book(){
    console.log("book");
  }

}
