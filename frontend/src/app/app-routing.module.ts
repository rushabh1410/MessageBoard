import { NgModule ,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MessageComponent } from './messages.component';
import {ActivatedRoute  } from "@angular/router";
import {WebServiceService  } from "./web-service.service";
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'messages/:name',
    component:MessageComponent
  },
  {
    path:'messages',
    component:MessageComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ 

  constructor(private webService :WebServiceService , private route:ActivatedRoute){
  }

  

}
