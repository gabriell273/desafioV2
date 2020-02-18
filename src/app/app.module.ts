import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { UserService } from 'src/services/user.service';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component'
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    UserDetailComponent,
    UserCreateComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
