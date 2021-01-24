import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  mutuals: string[] = [];
  @Input() screenName: string = "";
  private apiService: ApiService; 

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  ngOnInit(): void {
    this.apiService.getMutuals(this.screenName)
      .subscribe((mutualList: string[]) => {
        this.mutuals = mutualList
      })
  }
}
