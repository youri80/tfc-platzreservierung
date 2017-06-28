import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dateview',
  templateUrl: './dateview.component.html',
  styleUrls: ['./dateview.component.css']
})
export class DateviewComponent implements OnInit {

  hour:number;

   _Date:Date;
  @Input() Court:number;

  _reserved:boolean;

  private _Reservation:any;
  
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

  private init(){
    this.reserved = false;
    //Serviceaufruf, Prüfung ob ein Termin für Datum, Zeit und Platz vorliegt.
  }
  
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
  public get Reservation() : any {
    return this._Reservation;
  }
  
  public set Reservation(v : any){
    this._Reservation = v;
    
  }
  
}
