import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';
import { ApiService } from './api.service';
import { Subject } from "rxjs";

@Injectable({
  providedIn: "any"
})
export class LoginDataService {

  private userData: UserData;
  private userDataSubject: Subject<UserData>;

  constructor(private api: ApiService) { 
    this.userData = new UserData("","","","");
    this.userDataSubject = new Subject<UserData>();
  }
  
  commitUser(screenName: string) {
    this.api.getUserData(screenName).subscribe(
      (user: UserData) => {
        this.userData = user;
        this.transmitUserData()
      }
    )

    this.transmitUserData()
  }

  subscribeUserData(func: (x: UserData) => void ): void {
    this.userDataSubject.subscribe(func);
  }

  transmitUserData() {
    console.log("transmitted")
    this.userDataSubject.next(this.userData);
  }
}