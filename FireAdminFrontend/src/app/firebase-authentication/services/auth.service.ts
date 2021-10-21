import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  isLoggedIn$: Observable<any> = this.afAuth.user;

  userToken$: Observable<String | null> = this.afAuth.idToken;

  login(): void {
    this.router.navigate(['/']);
  }

  logout(): void {

    this.afAuth.signOut();
    this.router.navigate(['login']);
    

  }
}
