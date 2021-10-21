import { NgModule } from "@angular/core";
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";
import { RouterModule, Routes } from "@angular/router";
import { FirebaseUiLoginComponent } from "./components/firebase-ui-login/firebase-ui-login.component";


const routes: Routes = [

  {
    path: 'login',
    component: FirebaseUiLoginComponent
  
  }
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class FirebaseAuthenticationRoutingModule { }
  