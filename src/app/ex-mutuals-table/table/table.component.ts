import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoginDataService } from '../services/login-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  mutuals: string[] = [];

  constructor(private apiService: ApiService, private loginData: LoginDataService) {
    this.apiService = apiService;
  }

  ngOnInit(): void {
    this.apiService.getMutuals(this.loginData.getUserData().screenName)
      .subscribe((mutualList: string[]) => {
        this.mutuals = mutualList;
      })
  }
}
