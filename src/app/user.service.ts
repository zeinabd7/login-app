import { Injectable } from '@angular/core';
import {User} from './user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http:HttpClient) { }
   
  getAll(){
    //return this.users;
    const api_url="http://localhost:8000"

    return this.http.get<User[]>(`${api_url}/users`);
  }



}
