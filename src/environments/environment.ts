// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { config } from "rxjs";
import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAaEPoB0zh2F5U3ONDjNUhfRy3ExDfOv0Y",
    authDomain: "angularproject-adbaa.firebaseapp.com",
    projectId: "angularproject-adbaa",
    storageBucket: "angularproject-adbaa.appspot.com",
    messagingSenderId: "725351845802",
    appId: "1:725351845802:web:bbdf8c10b0bfd0965b25d3",
    measurementId: "G-FK3ZSRCWLQ"
  },
    
 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
