import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private angularFireStore:AngularFirestore) { }

  getAllMessages(){
    return this.angularFireStore.collection('chat').valueChanges()
  }

  addMessage(data){
    return this.angularFireStore.collection('chat').add(data)
  }
}
