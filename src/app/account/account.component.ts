import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public loggedInStill = false;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    //this.loggedInStill = this.authService.isLoggedIn;
  }

  changeEmail(event){
    event.preventDefault();
    //console.log(event);
     const target = event.target;
     const txtemail = target.querySelector('#email').value;
     console.log(txtemail);
     this.authService.changeEmail(txtemail);
     //this.authService.checkLogin(txtusername,txtpassword);
     /*console.log("usr: ",txtusername, "pwd: ",txtpassword);
     if(txtusername == "admin" && txtpassword=="password"){

       if(typeof(Storage) !== "undefined"){
         //console.log("Storage ready");
         localStorage.setItem("username", txtusername);
         localStorage.setItem("password", txtpassword);
         //console.log(localStorage.getItem("lastname"));
       }else{
         console.log("no storage supported");
       }
       $("#gate").html("Welcome admin");


       //$("#navigation").html("");
     }else{
       $("#gate").html("go away");
     }*/
  }



}
