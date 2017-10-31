import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class DataService {

  key = "7c41769aed6f4fbd87ffa75cbbb91b05";
  tmdb_base_url:string = "https://api.themoviedb.org/3/";

  constructor(private firebaseAuth: AngularFireAuth, private _http:Http) { }

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

  getMoviesList(page=0,year=2010){
    return this._http.get(`http://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&api_key=${this.key}&page=${page}`)
  }

  getMovieDetails(id){
    return this._http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}`);    
  }

}
