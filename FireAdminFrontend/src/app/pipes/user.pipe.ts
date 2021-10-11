import { Pipe, PipeTransform } from '@angular/core';
import { FBUser } from 'src/app/models/FBUser';
import { UserRecord } from '../models/UserRecord';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: UserRecord[], filterBy: string): UserRecord[] {

    if (filterBy != '') {
      return value.filter((user: FBUser) =>
       user.displayName?.toLowerCase().includes(filterBy.toLowerCase())
       || user.uid?.toLowerCase().includes(filterBy.toLowerCase())
       || user.email?.toLowerCase().includes(filterBy.toLowerCase())
       || (user.customClaims['role'] != null && user.customClaims['role'].toLowerCase().includes(filterBy.toLowerCase()))
       
       );
    } 
    else{
      return value;
    } 
  }

}
