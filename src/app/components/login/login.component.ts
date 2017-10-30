import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  requestingHttp:boolean = false;

  constructor(private _dataService:DataService,private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit(valid,value){
    this._dataService.login(value)
      .then((value) => {
        this.requestingHttp = false;
        console.log('Success!', value);
        this._flashMessagesService.show("You are successfully registered, now LOGIN", { cssClass: 'alert-success', timeout: 3000 });

      })
      .catch((err) => {
        this.requestingHttp = false;
        console.log(err.message)
        this._flashMessagesService.show("Error"+err.message, { cssClass: 'alert-danger', timeout: 2000 });
      })
  };//

}
