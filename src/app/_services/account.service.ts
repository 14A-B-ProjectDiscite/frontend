import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 baseUrl= 'http://localhost:5241/api/';
 private currentUserSource = new ReplaySubject<User>(1);
 currentUser$ =this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model:any){
    return this.http.post<User>(this.baseUrl+'Users/login'+'?' + encodeURI(`email=${model.email}&password=${model.password}`), null).pipe(
      map((response: User) =>{
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model:any){
    return this.http.post(this.baseUrl+'Users/register'+'?' + encodeURI(`username=${model.username}&email=${model.email}&password=${model.password}`), null).pipe(
      map((user: User)=>{
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        
      })
    )
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null!);
  }
}
