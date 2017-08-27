import { Component, QueryList, ViewChildren, OnInit, EventEmitter, Output, AfterViewInit, ViewChild  } from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {SchedulerService} from '../services/scheduler.service';
import {DateviewComponent} from '../dateview/dateview.component';
import * as moment from 'moment';

@Component({
  selector: 'app-schedulerview',
  templateUrl: './schedulerview.component.html',
  styleUrls: ['./schedulerview.component.css']
})
export class SchedulerviewComponent implements OnInit, AfterViewInit {
  
  hours:number[] = [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  courts:number[] = [1,2,3];
  maxDay:number = 14; 
  
  @ViewChildren('child') 
  components:QueryList<DateviewComponent>;

  slots:any[];

  maxDate = new Date(new Date().setDate(new Date().getDate()+this.maxDay));
  
  _selectedDate:Date;

  
 @Output() 
 DateChanged:EventEmitter<any> = new EventEmitter<any>();

  constructor(private _schedulerService:SchedulerService) {
    this.today();
   }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    console.log(this.components.forEach( n=> console.log(`${n.Date} - ${ n.Hour} - ${n.Court}`)));
    //throw new Error("Method not implemented.");
    // wir beim wechsel des Datum nicht erneut aufgerufen
    //Variante über Service weiterverfolgen
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
     this.slots = this.create();
     
     this._schedulerService.loadDates(v)
     .subscribe( reservations => {

        this.slots.map(n => n.courts.forEach(c => {
          if (moment(v,'YYYYMMDD').isSame(moment(c.date,'YYYYMMDD')))
          c.Reservation = null;   
        }));
        reservations.forEach(element => {
        console.log(element.$key);
        
        let relevantSlots = this.slots.filter((w) => {
          return w.hour == element.hour 
        });
        relevantSlots.forEach(n=>{
          var court = n.courts[element.court -1];
          court.Reservation = element;
        }  
        );

     })});
      this.DateChanged.emit(this._selectedDate);
    }
  }

  private create():any{
    let slots = [];
    this.hours.forEach(hour => {
      slots.push( {
        courts:  this.createItem(hour),
        hour:hour,
        //id: this._schedulerService.createKey(this.selectedDate,element,c),
        date: this.selectedDate
      });
    });
    return slots;
  }

  private createItem(hour:number):any{
    return this.courts.map(element => {
        return {
          hour: hour,
          reserved: false,
          date: this.selectedDate,
          court: element
        }
    });
  }

  

 

}
