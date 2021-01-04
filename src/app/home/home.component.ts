import { FirebaseService } from './../service/firebase.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() isLogout=new EventEmitter<void>();
  @Input() emailHome;
  constructor(public firebaseService: FirebaseService ) { }

  ngOnInit(): void {
console.log(localStorage.getItem('user')) ; }
  logout1(){
    this.firebaseService.logout();
    this.isLogout.emit();
  }
}
