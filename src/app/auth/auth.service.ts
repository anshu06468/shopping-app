import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

export interface authReturnData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<authReturnData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDg52oJbxvBkG5Rdsr4VGVV5yD3lloG4-A",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe
      (
        catchError(this.handleError),
        tap(respData => {
          this.handleAuthenticate(respData.email, respData.localId, respData.idToken, +respData.expiresIn)
        })



      )
  }


  logIn(email: string, password: string) {
    return this.http.post<authReturnData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDg52oJbxvBkG5Rdsr4VGVV5yD3lloG4-A",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe
      (
        catchError(this.handleError),
        tap(respData => {
          this.handleAuthenticate(respData.email, respData.localId, respData.idToken, +respData.expiresIn)
        })
      )
  }

  private handleAuthenticate(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = "An unknown error occurred";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage)
    }
    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "The email address is already in use by another account."
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "There is no user found with this email address";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "The password is invalid or the user does not have a password.";
        break;
    }
    return throwError(errorMessage);
  }
}
