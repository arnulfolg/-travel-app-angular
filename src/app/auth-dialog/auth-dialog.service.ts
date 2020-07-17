import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';

@Injectable({
	providedIn: 'root'
})
export class AuthDialogService {

	displayButton = new EventEmitter();
	button:boolean;

	constructor(public afAuth: AngularFireAuth) { }

	logInWithEmail(value) {
		console.log("auth service" + value.email)
		return new Promise<any>((resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(value.email, value.password)
			.then(res => {
				resolve(res);
			}, err => reject(err))
		})
	}

}
