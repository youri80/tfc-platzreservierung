import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dateview',
  templateUrl: './dateview.component.html',
  styleUrls: ['./dateview.component.css']
})
export class DateviewComponent implements OnInit {

  hour:number;

  @Input() Date:Date;
  @Input() Court:number;

  _reserved:boolean;
  
  constructor() { }

  ngOnInit() {
  }
 
   reserve(){
    console.log(`${this.Date} Platz ${this.Court}`);
    this.reserved = true;
  }

  cancel(){
    console.log("cancel click");
    this.reserved = !this.reserved;
  }

  reset(){
    this.reserved = false;
  }
  
   get reserved() : boolean {
    return this._reserved ;
  }
  
  
   set reserved(v : boolean) {
    this._reserved = v;
  }
  
}
