import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private _HttpClient:HttpClient) { }
  getMenu(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}/menu`)
  }
}
