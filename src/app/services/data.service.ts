import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class DataService {

  constructor(private firebaseAuth: AngularFireAuth) { }

  signUp(userData){
    return this.firebaseAuth
    .auth
    .createUserWithEmailAndPassword(userData.email, userData.password)
  }

  login(userData) {
    return this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(userData.email, userData.password)
       
  }

}
