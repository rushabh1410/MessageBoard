import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  BASE_URL='http://localhost:1234/api';
  constructor(private http:HttpClient , private sb: MatSnackBar) { 
    this.getMessages('');
  }


  private messageStore :any = [];
  private messageSubject = new Subject();
  messages = this.messageSubject.asObservable();

  getMessages(user){
      user = (user) ? '/' + user : '';
      this.http.get(this.BASE_URL+'/messages'+user).subscribe(response => {
        this.messageStore = response;
        this.messageSubject.next(this.messageStore);
      },error => {
        this.handleError("Unable to get message");
       });
  }

  async postMessage(message){
   try {
    var response = await this.http.post(this.BASE_URL+'/messages',message).toPromise();
    this.messageStore.push(response);
    this.messageSubject.next(this.messageStore);
   } catch (error) {
     this.handleError("unable to post message");
     
   }

  }

  private handleError(error){
    console.error(error);
    this.sb.open(error,'close',{duration:2000});
  }
}
