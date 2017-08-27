import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Subject} from 'rxjs';

@Injectable()
export class SchedulerService {

  private dateAnnouncedSource = new Subject<string>();
 
 
  // Observable string streams
  dateAnnounced$ = this.dateAnnouncedSource.asObservable();

  constructor(private _af:AngularFireDatabase) {
    
   }

  bookCourt(date:Date, hour:number, court:number,){
    let object = this.createObject(date,hour,court);
    let list = this._af.list('/dates');
    list.push(object); //eigener Key verwenden
  }

  public loadDates(date:Date):FirebaseListObservable<any>{
    return this._af.list('/dates',{
      query:{
        orderByChild:'date',
        startAt:this.createObject(date,0,0).date,
        endAt: this.createObject(date,24,99).date
      }
    });
    //Problem Key sind Strings --> sortieren nach child value
  }

  public createObject(date:Date, hour:number,court:number):any{
      let daypart = this.formatNumber(date.getDate());
      let monthpart = this.formatNumber(date.getMonth()+1);
      return {
        date: `${date.getFullYear().toString()}${monthpart}${daypart}`,
        court: court,
        hour: hour
      }
  }

  // Liefert bei einem einzifferigen Wert eine führende 0 
  public formatNumber(value:number):string{
     return value < 10 ? '0' + value.toString() : value.toString();
     
}
    public cancelCourt(reservation:any){
      this._af.list('/dates').remove(reservation.$key);
    }
  
}
