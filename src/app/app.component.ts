import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'week4tut';
  constructor(public authService: AuthService,
  public router: Router) {
    //console.log(authService.isLoggedIn);
    //authService = aService;

  }
  ngOnInit(): void {
    //$("#navigation").html("");
    console.log(this.authService.isLoggedIn);
    console.log(this.router.url);
  }

  logout(){
    this.authService.logOut();
  }
}
