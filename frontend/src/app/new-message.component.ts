import {Component,Output,EventEmitter} from '@angular/core'
import {WebServiceService} from './web-service.service';

@Component({
    selector:'new-message',
    template:`
    <mat-card class="card">
    <mat-card-content>
    <input [(ngModel)]="message.owner" matInput placeholder="Name">  
    <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
    </mat-card-content> 
    <mat-card-actions>
    <button (click)="post()" mat-raised-button color="primary">POST</button>
    </mat-card-actions> 
    </mat-card> 
    `
})

export class NewMessageComponent {

    constructor(private webService : WebServiceService){

    }
    message={
        owner :"",
        text:"",
    }
    

    post(){
        this.webService.postMessage(this.message);
        console.log(this.message);
    }

    
}