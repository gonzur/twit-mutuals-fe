import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../models/user-data';
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
    this.userData = new UserData("","","","");
    this.loginData.subscribeUserData((data: UserData)=>{
      this.userData = data;
    });

    console.log("registered");      
  }

  ngOnInit(): void {
    
  }

}
