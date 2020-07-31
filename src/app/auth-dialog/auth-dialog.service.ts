import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class AuthDialogService {

user$: Observable<User | null>;
displayButton = new EventEmitter();
button: boolean;

constructor(public afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
}

logInWithEmail(value): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        this.afAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
            console.log(res);
            resolve(res);
        }, err => {
            reject(err);
        });
    });
}

closeSession(): void {
    this.afAuth.signOut();
}

}
