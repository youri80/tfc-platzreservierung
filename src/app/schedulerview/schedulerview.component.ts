import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-schedulerview',
  templateUrl: './schedulerview.component.html',
  styleUrls: ['./schedulerview.component.css']
})
export class SchedulerviewComponent implements OnInit {

  hours:number[] = [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  maxDay:number = 14; 
 
  maxDate = new Date(new Date().setDate(new Date().getDate()+this.maxDay));
  
  _selectedDate:Date;

  
 @Output() 
 DateChanged:EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.today();
   }

  ngOnInit() {
    
  }

  nextDay(){
     this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate()+1));
  }

  prevDay(){
    if (this.selectedDate > new Date()){
      this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate()-1));
    }
  }

  today(){
    this.selectedDate = new Date();
  }

  tomorrow(){
    this.selectedDate = new Date(new Date().setDate(new Date().getDate()+1));  
  }

  
  public get selectedDate() : Date {
    return this._selectedDate;
  }
  
  
  public set selectedDate(v : Date) {
    if (this._selectedDate != v){
      this._selectedDate = v;
      this.DateChanged.emit(this._selectedDate);
    }
  }
  

  //Childs müssen über Service kommunizieren

 

}
