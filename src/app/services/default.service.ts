import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(private _HttpClient:HttpClient) { }
  getSliders(){
    return this._HttpClient.get(`${environment.apiUrl}/welcome`)
  }
}
