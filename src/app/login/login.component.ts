import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault();
    //console.log(event);
     const target = event.target;
     const txtusername = target.querySelector('#username').value;
     const txtpassword = target.querySelector('#password').value;
     console.log("usr: ",txtusername, "pwd: ",txtpassword);
     if(txtusername == "admin" && txtpassword=="password"){
       $("#gate").html("Welcome admin");
     }else{
       $("#gate").html("go away");
     }
  }

}
