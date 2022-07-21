import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.css']
})
export class MaterialTestComponent implements OnInit {
  timer=false;

  constructor() { }

  ngOnInit(): void {
  }
  loadtimer(){
    this.timer=true;
    setTimeout(() => {
      this.timer=false;

    }, 5000);
  }

}
