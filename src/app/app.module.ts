import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component'
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { AuthService } from './services/auth.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ApiService } from './services/api.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todos.effects';

import * as fromTodos from './store/todos.reducer';
import { AgoPipe } from './pipes/ago.pipe'

const firebaseConfig = {
  apiKey: "AIzaSyCUUT_oOMV16oWZUI981JdQPYtuBW8BYGs",
  authDomain: "todosapp-61889.firebaseapp.com",
  projectId: "todosapp-61889",
  storageBucket: "todosapp-61889.appspot.com",
  messagingSenderId: "418835971251",
  appId: "1:418835971251:web:7f35a292ca3bed8bef04c6"
};

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    SignInPageComponent,
    DashboardPageComponent,
    TodoItemComponent,
    AgoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot({todos: fromTodos.reducer}, {}),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
