import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class LoginDataService {

  private userData: UserData;

  constructor(private api: ApiService) { 
    this.userData = new UserData("","","","");
  }
  
  commitUser(screenName: string) {
    this.api.getUserData(screenName).subscribe(
      (user: UserData) => {
        this.userData = user;
      }
    )
  }

  getUserData(): UserData {
    return this.userData;
  }

  
}