import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';


@Component({
  selector: 'app-firebase-ui-login',
  templateUrl: './firebase-ui-login.component.html',
  styleUrls: ['./firebase-ui-login.component.scss']
})
export class FirebaseUiLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  successCallback(): void {

    firebase.auth().currentUser?.getIdToken().then((token: any) => console.log(token));
    this.router.navigate(['/']);


  }

  errorCallback(): void {
    console.log('Login Error');
  }

}
