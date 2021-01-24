import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { UnfollowButtonComponent } from './unfollow-button/unfollow-button.component'
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [TableComponent, UnfollowButtonComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatButtonModule,
  ]
})
export class ExMutualsTableModule { }
