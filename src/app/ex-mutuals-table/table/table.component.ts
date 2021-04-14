import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, Subject, zip, } from 'rxjs';
import {catchError, concatAll, exhaust, map, mergeAll, mergeMap, reduce, scan, switchAll, toArray, zipAll} from 'rxjs/operators';
import { UserData } from '../models/user-data';
import { ApiService } from '../services/api.service';
import { LoginDataService } from '../services/login-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: Subject<UserData[]> = new Subject<UserData[]>();
  IDs: string[] = [];
  screenName: string = "";
  // candidate column to display: name screen_name description
  columnsToDisplay: string[] = ['name', 'screen_name', 'description', 'unfollow'];
  

  constructor(private apiService: ApiService, private loginData: LoginDataService) {
    this.loginData.subscribeUserData((userData: UserData) => {
      if (this.screenName != userData.screen_name) {
        // should be exMutuals but nothing set up for that now
        this.apiService.getMutuals(userData.screen_name)
        .subscribe((IDs: string[]) => {
          this.IDs = IDs;
          console.log("hwy");
          this.updateDataSource();
        });

        this.screenName = userData.screen_name;
      }

    });
  }

  ngOnInit(): void {
    
  }

  updateDataSource() {
    let requestObservable = new Observable<string[]>((observe)=> {
      for(let i = 0; i < this.IDs.length; i += 100) {
        observe.next(this.IDs.slice(i,i+100));
      }
      observe.complete()
    });

    requestObservable.pipe(
      map(arr => this.apiService.postProfileData(arr)),
      concatAll(),
      toArray()
    ).subscribe((final)=>{
      this.data.next(flatten(final));
    })
  }
}
