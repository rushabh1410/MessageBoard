import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WebServiceService} from './web-service.service';
import {HttpClientModule} from '@angular/common/http';
import {NewMessageComponent} from './new-message.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule ,ReactiveFormsModule} from'@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavComponent} from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { DemoMaterialModule } from './material.module';
import {  AuthService } from "./auth.service";
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [WebServiceService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
