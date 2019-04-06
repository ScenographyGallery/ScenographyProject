import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  // login(data): Observable<any> {
    // return this.http.post<any>(`${env.apiUrl}/login/web`, data)
    //   .pipe(map(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.access_token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //       this.currentUserSubject.next(user);
    //     }
    //
    //     return user;
    //   }));
  // }

  // signup(data): Observable<any> {
  //   return this.http.post<any>(`${env.apiUrl}/register`, data)
  //     .pipe(take(1));
  // }
}
