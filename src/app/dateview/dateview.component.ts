import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dateview',
  templateUrl: './dateview.component.html',
  styleUrls: ['./dateview.component.css']
})
export class DateviewComponent implements OnInit {

  hour:number;

  date:Date;

  _reserved:boolean;
  
  constructor() { }

  ngOnInit() {
  }
 
   reserve(){
    console.log("reserve click");
    this.reserved = true;
  }

  cancel(){
    console.log("cancel click");
    this.reserved = !this.reserved;
  }

  
   get reserved() : boolean {
    return this._reserved ;
  }
  
  
   set reserved(v : boolean) {
    this._reserved = v;
  }
  
}
