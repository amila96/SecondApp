import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashBoardComponent} from './component/dash-board/dash-board.component';
import {LogInFormComponent} from './component/log-in-form/log-in-form.component';
import {DefaultPageComponent} from './component/dash-board/pages/default-page/default-page.component';
import {RegisterHotelPageComponent} from './component/dash-board/pages/register-hotel-page/register-hotel-page.component';

const routes: Routes = [
  {path:'', component:LogInFormComponent },
  {path:'DashBord', component:DashBoardComponent, children:[
    {path: '',component:DefaultPageComponent},
    {path: 'registerHotel',component:RegisterHotelPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
