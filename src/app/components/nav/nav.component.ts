import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn:boolean;
  loggedInUser:string;

  constructor(private _authService:AuthService) { }

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

}
