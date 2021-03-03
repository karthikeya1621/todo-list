import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, EMPTY, from } from 'rxjs';
import { ToDo } from '../models';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  currentUser: null | any;

  constructor(private firestore: AngularFirestore, private auth: AuthService) {
    auth.currentUser$.subscribe(user => {
      this.currentUser = user;
    })
  }

  loadToDos() {
    return this.firestore.collection<ToDo>('users').doc(`${this.currentUser.uid}`).collection('todos').valueChanges()
  }

  addToDo(todo: ToDo) {
    return from(this.firestore.collection<ToDo>('users').doc(`${this.currentUser.uid}`).collection('todos').add(todo))
  }

  deleteToDo(id: string) {
    return from(this.firestore.collection('users').doc(`${this.currentUser.uid}`).collection('todos').ref.where('id','==',id).get())
  }

  updateToDo(id: string) {
    return from(this.firestore.collection('users').doc(`${this.currentUser.uid}`).collection('todos').ref.where('id','==',id).get())
  }

  
}
