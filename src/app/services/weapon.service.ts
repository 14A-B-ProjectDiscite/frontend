import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Enviroments/environment';
import { WeaponModel } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getWeapons(): Observable<WeaponModel[]> {
    return this.http.get<WeaponModel[]>(this.baseUrl + 'Statistics/weapons');
  }
}
