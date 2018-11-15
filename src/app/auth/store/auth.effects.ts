import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase'; 

import * as AuthActions from './auth.actions'; 

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup= this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .map((action: AuthActions.TrySignup) => {
        return action.payload;
    })
    .switchMap((authData: {username:string, password:string}) => {
        return fromPromise(firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(authData.username,
        authData.password));
    });

    constructor(private actions$: Actions) {
    }
}