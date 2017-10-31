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
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpModule } from '@angular/http';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

import { ChartModule } from 'angular2-chartjs';
import { VotingChartComponent } from './components/voting-chart/voting-chart.component';

const appRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'movies',component:MovieListComponent},
  {path:'movie/:id',component:MovieDetailComponent},
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
    RegisterComponent,
    MovieListComponent,
    MovieDetailComponent,
    VotingChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),

    ChartModule
  ],
  providers: [AngularFireAuth,DataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
