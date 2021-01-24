import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  unfollowRoute: string = "/unfollow"
  exMutualsRoute: string = "/ex-mutuals"

  constructor(private http: HttpClient) { }

  unfollow(screenName: string): void {
    this.http.get<string>(
      this.unfollowRoute + "?screenName=" + screenName );
  }

  getMutuals(screenName: string): Observable<string[]> {
    return this.http.get<string[]>(
      this.exMutualsRoute + "?screenName=" + screenName );
  }

  
}
