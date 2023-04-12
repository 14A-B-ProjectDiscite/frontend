import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Enviroments/environment';
import { EnemyModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getEnemies(): Observable<EnemyModel[]> {
    return this.http.get<EnemyModel[]>(this.baseUrl + 'Statistics/enemies');
  }
}
