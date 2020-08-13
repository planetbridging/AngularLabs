import { Injectable } from '@angular/core';
import {account} from './account.js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  private userArray = [];
  public currentUser;
  public setLoggedIn(setLog){this.isLoggedIn = setLog;}
  public getUsername(){if(typeof(Storage) !== "undefined"){return localStorage.getItem("username");}else{return "";}}
  public getEmail(){if(typeof(Storage) !== "undefined"){return localStorage.getItem("email");}else{return "";}}
  constructor() {
    this.userArray.push(new account(
      "admin",
      "19/12/1990",
      29,
      "admin@gmail.com",
      "password",
      true
    ));
    this.userArray.push(new account(
      "notadmin",
      "119/112/11990",
      129,
      "notadmin@gmail.com",
      "notpassword",
      true
    ));
    console.log("checking logged in");
    this.checkLoggedIn();
  }

  checkLoggedIn(){
    if(typeof(Storage) !== "undefined"){
      var un = localStorage.getItem("username");
      var pwd = localStorage.getItem("password");
      for (var i = 0; i < this.userArray.length; i++) {
        if(un == this.userArray[i].getUsername() &&
          pwd == this.userArray[i].getPassword()){
            console.log("still logged in");
            this.isLoggedIn = true;
        }
      }
    }
  }

  checkLogin(un,pwd){
    for (var i = 0; i < this.userArray.length; i++) {
      if(un == this.userArray[i].getUsername() &&
        pwd == this.userArray[i].getPassword()){
        console.log("just logged in");
        this.isLoggedIn = true;
        localStorage.setItem("username", un);
        localStorage.setItem("password", pwd);
        localStorage.setItem("email", this.userArray[i].getEmail());
      }
    }
  }
  logOut(){
    console.log("logged in session destroyed... how could you :(");
    localStorage.clear();
    this.setLoggedIn(false);
  }
}
