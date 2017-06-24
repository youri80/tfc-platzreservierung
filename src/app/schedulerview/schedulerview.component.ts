import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedulerview',
  templateUrl: './schedulerview.component.html',
  styleUrls: ['./schedulerview.component.css']
})
export class SchedulerviewComponent implements OnInit {

  hours:number[] = [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  
  constructor() { }

  ngOnInit() {
  }

}
