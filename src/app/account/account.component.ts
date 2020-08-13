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



}
