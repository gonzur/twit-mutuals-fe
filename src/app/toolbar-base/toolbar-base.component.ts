import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-base',
  templateUrl: './toolbar-base.component.html',
  styleUrls: ['./toolbar-base.component.css']
})
export class ToolbarBaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mutual(a: string) {
    this.router.navigate(['mutuals'], {queryParams: {screenName: a}});
  }

  home() {
    this.router.navigate(['home']);
  }

}
