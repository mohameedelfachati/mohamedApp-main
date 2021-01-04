import { FirebaseService } from './service/firebase.service';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAaEPoB0zh2F5U3ONDjNUhfRy3ExDfOv0Y',
      authDomain: 'angularproject-adbaa.firebaseapp.com',
      databaseURL: "https://angularproject-adbaa-default-rtdb.firebaseio.com",
      projectId: "angularproject-adbaa",
      storageBucket: "angularproject-adbaa.appspot.com",
      messagingSenderId: "725351845802",
      appId: "1:725351845802:web:bbdf8c10b0bfd0965b25d3",
      measurementId: "G-FK3ZSRCWLQ"
    })


  ],
  providers: [FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
