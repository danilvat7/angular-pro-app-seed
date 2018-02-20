import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from './../auth/auth.module'
// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

// var config = {
//   apiKey: "AIzaSyCCJmqePUJ06PkjoRgbwA4VxX9qFIfi87A",
//   authDomain: "pro-app-7f64f.firebaseapp.com",
//   databaseURL: "https://pro-app-7f64f.firebaseio.com",
//   projectId: "pro-app-7f64f",
//   storageBucket: "pro-app-7f64f.appspot.com",
//   messagingSenderId: "576861336153"
// };
