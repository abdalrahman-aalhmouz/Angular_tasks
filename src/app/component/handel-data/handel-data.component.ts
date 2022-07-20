import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-handel-data',
  templateUrl: './handel-data.component.html',
  styleUrls: ['./handel-data.component.css']
})
export class HandelDataComponent implements OnInit {
  message: any[] = [];
  subscription: Subscription = new Subscription;
  constructor(private messageService:MessageService) {
      this.subscription=this.messageService.get_message().subscribe(message=>{
        if(message){
          this.message.push(message);
          console.log(message);
        }else{
          this.message=[];
          console.log('error pro !')
        }
      })
   }

  ngOnInit(): void {
  }

}
