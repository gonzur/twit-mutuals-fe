export class UserData {
  readonly profileImage: string;
  readonly link: string;
  readonly profileName: string ;
  readonly screenName: string;

  constructor(profileImage: string, link: string, profileName: string, screenName: string) {
    this.profileImage = profileImage;
    this.link = link;
    this.profileName = profileName;
    this.screenName = screenName;
  }

}