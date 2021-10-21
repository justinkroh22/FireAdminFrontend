import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { TablerowComponent } from './components/tablerow/tablerow.component';
import { UserviewComponent } from './components/userview/userview.component';
import { CreateuserComponent } from './components/createuser/createuser.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { UserPipe } from './pipes/user.pipe';
import { FirebaseAuthenticationModule } from './firebase-authentication/firebase-authentication.module';
import { TokenInterceptor } from './firebase-authentication/interceptor/token.interceptor';
// import firebase from 'firebase';
// import * as firebaseui from 'firebaseui';


// const firebaseUiAuthConfig: any = {
//   signInFlow: 'popup',

//   signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   tosUrl: '',
//   privacyPolicyUrl: '',
//   credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
// };

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    UsertableComponent,
    TablerowComponent,
    UserviewComponent,
    UserPipe,
    CreateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    // FirebaseUIModule.forRoot(FirebaseAuthenticationModule.),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FirebaseAuthenticationModule
  ],
  // providers: [

  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: TokenInterceptor,
  //     multi: true
  //   }
  // ],

  bootstrap: [AppComponent]
})
export class AppModule { }
