import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn:boolean;
  loggedInUser:string;

  constructor(private _authService:AuthService, private _router:Router) { }

  ngOnInit() {
    this._authService.getAuth()
      .subscribe(
        (auth) => {
          if(auth){
            this.isLoggedIn = true;
            this.loggedInUser = auth.email;
            console.log(auth.uid)
          }else{
            this.isLoggedIn = false;
          }
        }
      )
  }

  signOut(){
    this._authService.logout()
      .then((data) => {
        console.log("sign out");
        this.isLoggedIn = false;
        this.loggedInUser = '';
        this._router.navigate(['/login'])
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
