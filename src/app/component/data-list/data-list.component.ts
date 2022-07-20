import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
  }
  send_message(){
    this.messageService.send_message("hello there !");
  }
  clear_message(){
    this.messageService.clear_message();
  }
}
