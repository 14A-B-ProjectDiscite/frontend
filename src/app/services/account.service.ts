import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { environment } from 'src/Enviroments/environment';
import { UserModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseUrl = environment.apiUrl;
private currentUserSource = new ReplaySubject<UserModel>(1);
currentUser$ =this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }
  

login(model: any) {
  return this.http.post(this.baseUrl + 'user/login', model).pipe(
    map((response: UserModel) => {
      const user = response;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
      }
    })
  )
}

register(model: any) {
  return this.http.post(this.baseUrl + 'user/register', model).pipe(
    map((user: UserModel) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
      }
    })
  )
} 



  setCurrentUser(user: UserModel,){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
