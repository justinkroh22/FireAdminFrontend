import { Component, Input, OnInit } from '@angular/core';
import { FBUser } from 'src/app/models/FBUser';
import { HomepageComponent } from '../homepage/homepage.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import { UserRecord } from 'src/app/models/UserRecord';

@Component({
  selector: '[tablerow]',
  templateUrl: './tablerow.component.html',
  styleUrls: ['./tablerow.component.scss']
})
export class TablerowComponent implements OnInit {

  @Input() user?: UserRecord;

  constructor(private userService: UserService, private router: Router) { }


  viewUser() {

    let url: string = '/user/' + this.user?.uid;

    this.router.navigate([url]);
  }

  resetPassword() {

    if (this.user?.email) {
    this.userService.resetPassword(this.user?.email)
    .subscribe(data => {console.log(data)}, err => console.log(err), () => console.log("reset password"));
    }
  }

  enableUser() {
  
    if (this.user?.email && this.user?.uid) {
      this.userService.enableUser(this.user?.uid).pipe(first())
      .subscribe(data => {console.log(data)}, err => console.log(err), () => this.setDisabled(false));
    }
  }

  disableUser() {

    if (this.user?.email && this.user?.uid) {
      this.userService.disableUser(this.user?.uid).pipe(first())
      .subscribe(data => {console.log(data)}, err => console.log(err), () => this.setDisabled(true));
    }

  }


  setDisabled(disabled: boolean) {

    console.log('test')
    if(this.user) {
      this.user.disabled = disabled;
      console.log(disabled + "User")
    }
  }




  ngOnInit(): void {
  }

}
