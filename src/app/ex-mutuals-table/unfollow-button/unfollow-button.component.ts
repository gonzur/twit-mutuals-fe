import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-unfollow-button',
  templateUrl: './unfollow-button.component.html',
  styleUrls: ['./unfollow-button.component.css']
})
export class UnfollowButtonComponent implements OnInit {

  @Input() screenName: string = "";
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  unfollow() {
    this.apiService.unfollow(this.screenName);
  }

  ngOnInit(): void {
  }
}
