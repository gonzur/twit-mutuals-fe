import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MatTableModule  } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';
import { UnfollowButtonComponent } from './unfollow-button/unfollow-button.component'
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button'
import { ExMutualsPageComponent } from './ex-mutuals-page/ex-mutuals-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatCardModule } from "@angular/material/card";
import { ApiService } from './services/api.service';
import { LoginDataService } from './services/login-data.service';

@NgModule({
  declarations: [TableComponent, UnfollowButtonComponent, ExMutualsPageComponent, ProfileCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [
    ExMutualsPageComponent
  ],
  providers: [
    { provide: ApiService, useClass: ApiService},
    { provide: LoginDataService, useClass: LoginDataService}
  ]
})
export class ExMutualsTableModule { }
