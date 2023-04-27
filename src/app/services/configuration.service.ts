import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Enviroments/environment';
import { ConfigModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

 

  getConfig(): Observable<ConfigModel> {
    return this.http.get<ConfigModel>(this.baseUrl + 'config');
  }

  updateConfig(config: ConfigModel): Observable<ConfigModel> {
    return this.http.put<ConfigModel>(this.baseUrl+'config', config);
  }
}
