import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
private subject=new BehaviorSubject<any>({
messagecontent:"hello there teste"
})

  constructor() { }
  send_message(message:string){
    this.subject.next({content:message})
  }
  get_message():Observable<any>{
    return this.subject;
  }
  clear_message(){
    this.subject.next("");
  }
}
