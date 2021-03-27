import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/user-data';
import { ApiService } from '../services/api.service';
import { LoginDataService } from '../services/login-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  mutuals: string[] = [];
  screenName: string = "";
  columnsToDisplay: string[] = ['mutualName', 'unfollow'];
  dataSource = [{mutualName: 'test'}];

  constructor(private apiService: ApiService, private loginData: LoginDataService) {
    this.loginData.subscribeUserData((userData: UserData) => {
      if (this.screenName != userData.screen_name) {

        // this.apiService.getMutuals(userData.screenName)
        // .subscribe((mutualList: string[]) => {
        //   this.mutuals = mutualList;
        // });

        this.screenName = userData.screen_name;
      }

    });
  }

  ngOnInit(): void {
    
  }
}
