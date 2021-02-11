import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExMutualsPageComponent } from './ex-mutuals-table/ex-mutuals-page/ex-mutuals-page.component';

const routes: Routes = [ { path: "mutuals", component: ExMutualsPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
