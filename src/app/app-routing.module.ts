import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashBoardComponent} from './component/dash-board/dash-board.component';
import {LogInFormComponent} from './component/log-in-form/log-in-form.component';

const routes: Routes = [
  {path:'', component:LogInFormComponent },
  {path:'DashBord', component:DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
