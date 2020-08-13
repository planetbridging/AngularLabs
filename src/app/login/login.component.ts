import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault();
    //console.log(event);
     const target = event.target;
     const txtusername = target.querySelector('#username').value;
     const txtpassword = target.querySelector('#password').value;
     this.authService.checkLogin(txtusername,txtpassword);
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
