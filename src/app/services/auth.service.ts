import { Injectable } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private _afAuth:AngularFireAuth) { }

  //  checkUserStatus
  getAuth(){
    return this._afAuth.authState.map(auth => auth);
  }

}
