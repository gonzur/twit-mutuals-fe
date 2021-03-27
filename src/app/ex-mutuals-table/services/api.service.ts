import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'any'
})
export class ApiService {
  private readonly apiSubroute: string = "/api";
  private readonly unfollowRoute: string = this.apiSubroute + "/unfollow";
  private readonly exMutualsRoute: string = this.apiSubroute + "/exMutuals";
  private readonly userDataRoute: string = this.apiSubroute + "/profileData"

  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) { }

  setAuthHeaders(oauth: string , oauthSecret: string): void {
    this.headers.append("oauth", oauth);
    this.headers.append("oauthSecret", oauthSecret);
  }

  getUserData(screenName: string): Observable<UserData> {
    return this.http.get<UserData>(
      this.userDataRoute,
      { headers: this.headers, params:{screenName: screenName} } );
  }

  unfollow(screenName: string): void {
    this.http.get<string>(
      this.unfollowRoute + "?screenName=" + screenName,
      { headers: this.headers } );
  }

  getMutuals(screenName: string): Observable<string[]> {
    return this.http.get<string[]>(
      this.exMutualsRoute + "?screenName=" + screenName,
      { headers: this.headers } );
  }
}
