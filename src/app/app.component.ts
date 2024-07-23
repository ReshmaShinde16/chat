import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PopupComponent } from './popup/popup.component';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit   {
  constructor(private messageService:MessageService, private matDialog:MatDialog){}
  show: boolean = false;
  values: any;
  userName:string=""
  user: any=[];
  msg:any;
  public deploymentName: any;
   messageForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
  })
  message$:Observable<any>=new Observable();
  ngOnInit(): void {
    const userName=localStorage.getItem('user_name')
    if(userName){
      this.fetchMessages();
    }
    else{
      this.getUserName()
    }
console.log("data",userName);

   }
   fetchMessages(){
    this.userName=localStorage.getItem('user_name')
    console.log("fff",this.userName);
    this.user=this.userName;
    console.log("fff2",this.user);

    this.message$=this.messageService.getAllMessages()
   }
   con(name:any) {
    this.msg=name;
    this.messageService.addMessage({
      name:this.userName,
      timestamp: new Date(),
      message:name,


    })
    console.log("dataaaaa",this.msg);
  }
  onEnterHandler(event){
    this.msg=event
    this.messageService.addMessage({
      name:this.userName,
      timestamp: new Date(),
      message:this.msg,
    })}
  showModal(){
    this.show = !this.show;
  }
  submit(){
    alert(this.deploymentName);
  }
  getUserName(){
   const getUsername= this.matDialog.open(PopupComponent,{
      width:'50%'
    })

    getUsername.afterClosed().subscribe(data=>{
      //console.log(data);

      localStorage.setItem('user_name',data.userName)

      console.log("name",data.userName);

      this.fetchMessages()


    })
  }
  }

