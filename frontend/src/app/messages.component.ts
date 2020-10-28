import {Component, OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import {WebServiceService} from './web-service.service';

@Component({
    selector:'messages',
    template:`<div *ngFor =
    "let m of webService.messages|async">
    <mat-card class="card">
    <mat-card-title [routerLink]="['/messages',m.owner]" style="cursor:pointer">{{m.owner}}</mat-card-title>
    <mat-card-content>
    {{m.text}} 
    </mat-card-content>
   </mat-card>
    </div>
   `
})

export class MessageComponent implements OnInit{
    constructor(public webService : WebServiceService , private route : ActivatedRoute){

    }
    ngOnInit(){
        var name = (this.route.snapshot.params.name);
        console.log(name);
        this.webService.getMessages(name); 
      }



    
}