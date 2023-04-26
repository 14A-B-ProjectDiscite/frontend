import { HttpClient, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Enviroments/environment';
import { UserModel } from '../models';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<UserModel[]>(this.baseUrl + 'user');
  }
  
  banUser(id: number) {
    return this.http.delete(`api/user/${id}`);
  }

  getUser(id){
    return this.http.get<UserModel>(this.baseUrl + 'user/'+ id);
  }
}
