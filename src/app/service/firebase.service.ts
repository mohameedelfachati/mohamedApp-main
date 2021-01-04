import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
   isLoggedIn= false;
  constructor(public firebaseAuth: AngularFireAuth) {}
    async signin(email: string, password: string){
      await this.firebaseAuth.signInWithEmailAndPassword(email,password)
      .then(res=>{this.isLoggedIn=true;
        localStorage.setItem('user',JSON.stringify(res.user))}
        ).catch(err=>console.error('signin impossible'+err));
    }
    async signup(email: string,password: string){
      await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
      .then(res=>{this.isLoggedIn=true
        localStorage.setItem('user',JSON.stringify(res.user));}
        ).catch(err=>console.error('signup impossible'+err));
    }
    logout(){
      this.firebaseAuth.signOut();
      localStorage.removeItem('user');
    }
  }

