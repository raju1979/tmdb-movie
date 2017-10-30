import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{Routes,RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

//import firebase + angularfire2
import {AngularFireModule} from 'angularfire2';
import{AngularFireDatabase} from 'angularfire2/database';
import{AngularFireAuth} from 'angularfire2/auth';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

const appRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
]

const firebaseConfig = {
  apiKey: "AIzaSyDhvPWEuJtgpqjflUOGn83lf2POSwvQmfU",
  authDomain: "clientpanel-1324c.firebaseapp.com",
  databaseURL: "https://clientpanel-1324c.firebaseio.com",
  projectId: "clientpanel-1324c",
  storageBucket: "clientpanel-1324c.appspot.com",
  messagingSenderId: "1052374276449"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [AngularFireAuth,DataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
