import { Component, OnInit,Input } from '@angular/core';
import { SchedulerService} from '../services/scheduler.service';

@Component({
  selector: 'app-dateview',
  templateUrl: './dateview.component.html',
  styleUrls: ['./dateview.component.css']
})
export class DateviewComponent implements OnInit {

  @Input()Hour:number;

   _Date:Date;
  @Input() Court:number;

  _reserved:boolean;

  private _Reservation:any;



  key:number;
  
  constructor(private _schedulerService:SchedulerService) {
    
  }
  
  ngOnInit() {
  }
 
   reserve(){
    console.log(`${this.Date} Platz ${this.Court}`);
    this._schedulerService.bookCourt(this.Date,this.Hour,this.Court);
    this.reserved = true;
  }

  cancel(){
    console.log("cancel click");
    this.reserved = !this.reserved;
    this._schedulerService.cancelCourt(this._Reservation);
  }

  private init(){
    this.reserved = false;
    //Serviceaufruf, Prüfung ob ein Termin für Datum, Zeit und Platz vorliegt.
  }
   @Input()
   get reserved() : boolean {
    return this._reserved ;
  }
  
   set reserved(v : boolean) {
    this._reserved = v;
  }

  @Input()
  public get Date() : Date {
    return this._Date;
  }
  public set Date(v : Date) {
    this._Date = v;
    this.init();
  }

  @Input()
  get Reservation(){
    return this._Reservation ;
  }

  set Reservation (val:any){
    this._Reservation = val;
    if(val){
      this.reserved = true;
    }
    else {
      this.reserved = false;
    }
    
    
  }
  
  onInit(id:string){
    alert("called with id");
  }

}
