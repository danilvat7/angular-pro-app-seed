import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

// shared
import { SharedModule } from './shared/shared.module';


export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCCJmqePUJ06PkjoRgbwA4VxX9qFIfi87A",
  authDomain: "pro-app-7f64f.firebaseapp.com",
  databaseURL: "https://pro-app-7f64f.firebaseio.com",
  projectId: "pro-app-7f64f",
  storageBucket: "pro-app-7f64f.appspot.com",
  messagingSenderId: "576861336153"
};

export const ROUTES: Routes = [
  {
    path: "auth",
    children: [
      { path: "", pathMatch: "full", redirectTo: "login" },
      { path: "login", loadChildren: "./login/login.module#LoginModule" },
      {
        path: "register",
        loadChildren: "./register/register.module#RegisterModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
