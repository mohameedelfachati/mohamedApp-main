import { FirebaseService } from './service/firebase.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mohamedapp'
  isSignedIn = false;
  email;
  constructor(public firebaseService: FirebaseService){}
  // tslint:disable-next-line:typedef
  ngOnInit(){
    if (localStorage.getItem('user') !== null){
      this.isSignedIn = true;
    }
    else{
      this.isSignedIn = false;
    }}
  // tslint:disable-next-line:typedef
    async onSignup(email: string, password: string){
      await this.firebaseService.signup(email, password)
      this.email=email;
      if(this.firebaseService.isLoggedIn){
        this.isSignedIn = true;
        console.log(this.isSignedIn);
      }}
  // tslint:disable-next-line:typedef
    async onSignin(email: string, password: string){
        await this.firebaseService.signin(email, password);
      this.email=email;
      if (this.firebaseService.isLoggedIn){
          this.isSignedIn = true;
        }
      }
  // tslint:disable-next-line:typedef
      handleLogout(){
          this.isSignedIn = false;
      }

    }



