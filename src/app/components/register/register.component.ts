import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  requestingHttp:boolean = false;

  constructor(private _flashMessagesService: FlashMessagesService, private _router:Router, private _dataService:DataService) { }

  ngOnInit() {
  }

  signUp(valid,value) {
    console.log(value)
    this.requestingHttp = true;
    
    this._dataService.signUp(value)
      .then(value => {
        this.requestingHttp = false;
        console.log('Success!', value);
        this._flashMessagesService.show("You are successfully registered, now LOGIN", { cssClass: 'alert-success', timeout: 3000 });
        setTimeout(() => {
          console.log('now navigate')
          this._router.navigate(['/login']);
        },3000)
      })
      .catch(err => {
        this.requestingHttp = false;
        console.log(err.message)
        this._flashMessagesService.show("Error"+err.message, { cssClass: 'alert-danger', timeout: 2000 });
      });    
  }

}
