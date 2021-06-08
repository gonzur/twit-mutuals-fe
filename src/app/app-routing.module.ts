import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExMutualsPageComponent } from './ex-mutuals-table/ex-mutuals-page/ex-mutuals-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ { path: "mutuals", component: ExMutualsPageComponent }, { path: "", component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
