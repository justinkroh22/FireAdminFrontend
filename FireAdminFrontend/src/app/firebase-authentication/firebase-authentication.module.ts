import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseUiLoginComponent } from './components/firebase-ui-login/firebase-ui-login.component';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { FirebaseAuthenticationRoutingModule } from './firebase-authentication-routing.module';


const firebaseUiAuthConfig: any = {
  signInFlow: 'popup',

  signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: '',
  privacyPolicyUrl: '',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};


@NgModule({
  declarations: [FirebaseUiLoginComponent],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FirebaseAuthenticationRoutingModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  exports: [
    FirebaseUiLoginComponent
  ],

  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class FirebaseAuthenticationModule { }
