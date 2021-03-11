import { Component, OnInit } from '@angular/core';
import { LoginDataService} from '../services/login-data.service'
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ex-mutuals-page',
  templateUrl: './ex-mutuals-page.component.html',
  styleUrls: ['./ex-mutuals-page.component.css']
})
export class ExMutualsPageComponent implements OnInit {

  constructor(private loginData: LoginDataService,
    private api: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.loginData.commitUser(params["screenName"]);
      this.api.setAuthHeaders(params["oauth"], params["oauthSecret"]);
    })
    
  }

  ngAfterContentInit() {
    
  }

}
