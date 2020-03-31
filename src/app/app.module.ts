import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { MovieService } from './movie.service'
import { KeysService } from './keys.service';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    MovieService,
    KeysService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
