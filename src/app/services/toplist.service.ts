import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Enviroments/environment';
import { ToplistModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToplistService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getToplist(): Observable<ToplistModel[]> {
    return this.http.get<ToplistModel[]>(this.baseUrl + 'stats/toplist');
  }
 
}
