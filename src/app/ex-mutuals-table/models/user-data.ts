export class UserData {
  readonly name: string;
  readonly screen_name: string ;
  readonly profile_image_url: string;
  readonly description: string;

  readonly link: string;

  constructor(screenName: string, profileName: string, profileImage: string, description: string) {
    this.profile_image_url = profileImage;
    this.name = profileName;
    this.screen_name = screenName;
    this.description = description;

    this.link = "https://twitter.com/"+this.screen_name;
  }
}