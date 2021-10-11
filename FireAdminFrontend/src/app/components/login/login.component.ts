import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
//import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';

//import 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  
  successCallback(): void {
    firebase.auth().currentUser?.getIdToken().then((token: any) => console.log(token));

    //firebase.
    //this.authService.login();

  }

  errorCallback(): void {
    console.log('LoginComponent:: emailPasswordLogin:: login failed:');
  }

}
