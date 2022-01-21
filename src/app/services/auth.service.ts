import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userProfile:any;
  userId = "";
  constructor(private _HttpClient:HttpClient , private _Router:Router) {
  }

  location(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}/auth/signup`);
  }
  register(register:any) : Observable<any>{
    return this._HttpClient.post(`${environment.apiUrl}/auth/signup` , register)
  }
  login(login:any): Observable<any>{
    return this._HttpClient.post(`${environment.apiUrl}/auth/signin`,login)
  }
  saveCurrentUserToken() {
    let encodedToken: any = localStorage.getItem('token');
    if (localStorage.getItem('token')) {
      this.saveCurrentUserToken();
      this.userId = JSON.parse(localStorage.getItem('user_id') || '[]');

    }

    // this.currentUserData.next(decodedToken);

  }
  signout() {
    // this.userProfile=""
    this._Router.navigate(["/login"])
    localStorage.removeItem("token")
  }
  getToken() {
    return  localStorage.getItem("token")

  }
  isLogin() {
    return !!localStorage.getItem("token")
  }
  getUserProfile() {
    return this._HttpClient.get<any>(`${environment.apiUrl}/api/users/user`)
  }
  prepearUserData() {
    if(this.isLogin()) {
      this.getUserProfile().subscribe(res => {
        this.userProfile = res
      }, err => {
        localStorage.removeItem('token')
        alert(err.error.message)
      })
    }
  }
}
