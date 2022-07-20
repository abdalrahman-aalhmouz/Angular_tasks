import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  title = 'ang-pop';
  seconresult="";
  third_result="";
  
  ngOnInit(): void {
  
    }

  firstalert(){
    this.displayStyle = "block";
  }
  closefirststyle(){
this.displayStyle = "none";
  }

  secondalert(){
   let val= confirm("Bla bla confirm some action?");
    if (val == true) {
      this.seconresult="Result :Accepted"
    } else {
      this.seconresult="Result :Declined"
}
  }

  third_alert(){
    let name=prompt("What is your name ? :");
    if (name!=null) {
      this.third_result='Your name :'+name;
    }
  }
  fourth_alert(e:any){
    let alerte="Dfd"

      let text=alert("hellothere");
      $(document).click(function(){
        console.log('ssss')
      })
  }
  fif_alert(){
    alert('Dialog with close using escape');
  }
  six_alert(){
    this.modaldisplay = "block";
  }
  display_new_pop(){
    let val=confirm('Are you sure you want close dialog?')
    if(val==true){
      this.modaldisplay = "none";
    }else{
      this.modaldisplay = "block";
    }
  }
  displayStyle = "none";
  dopledisplay="none";
  modaldisplay="none";
  openPopup() {
    var count=0;
    this.displayStyle = "block";
    $(document).click(() =>{
      console.log(count)
      count++;
      if(count>1){
        this.displayStyle = "none";
        count=0;
        return;
      }

    })
  }
  closePopup() {
    this.displayStyle = "none";
  }
  num:number | undefined
  openerrorPopup(){
    var someNumber = 1;
    this.dopledisplay = "block";
    
    try {
      const myErr = { code: 42, reason: "the answer" };
      throw myErr; //don't do that in real life
  } catch(err) {
      console.log(err,'Shown via custom error handler'); //undefined
  }
  }
   throwErr(): never {
    throw new Error('Something went wrong');
  }
  closePopuperror(){
    this.dopledisplay ="none";
  }

  
}
