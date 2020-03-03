import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  urlLogin = 'http://192.168.100.137:3000/api/login'

  loginStatus: boolean = false;

  setLogin(value: boolean) {
    this.loginStatus = value;
  }

  get isLogin() {
    return this.loginStatus;
  }

  constructor(private route: Router, private http: HttpClient) { }

  //exception handler
  public handleError(err: HttpErrorResponse) {
    console.log('blog http service');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  loginService(mail, pwd): Observable<any> {
    alert(mail + '/' + pwd);
    let body = JSON.stringify({
      email: mail,
      password: pwd
    });
    // return this.http.get(this.urlLogin + mail + '/' + pwd, { responseType: 'json' })
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.urlLogin, body, httpOptions).pipe(
      catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
      })
    )

  }
}

