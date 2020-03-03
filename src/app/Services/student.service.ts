import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentEnroll } from '../Models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  registerUrl = "http://192.168.100.137:3000/api/register1";

  constructor(private http: HttpClient) { }

  // registerStudent(std: StudentEnroll): Observable<any> {
  //   console.log(std);
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //   return this.http.post(this.url, JSON.stringify(std), httpOptions)
  // }

  registerStudent(key: FormGroup): Observable<any> {
    console.log(key.value);
    const formData: FormData = new FormData();    
    formData.append('email', key.value.email);
    formData.append('password', key.value.password);
    formData.append('username', key.value.username);
    formData.append('profile', key.value.profile, key.value.profile.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'x-token': '5',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.registerUrl, formData, httpOptions)
    
  }

}
