import { Component, Input, OnInit } from '@angular/core';
import { LoginDataService } from '../services/login-data.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  // fill with dummy text for display purposes
  userData: UserData; 

  constructor(private loginData: LoginDataService) { 
    this.userData = loginData.getUserData();   
  }

  ngOnInit(): void {
  }

}
