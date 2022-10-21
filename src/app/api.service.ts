import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CreateUser, SingleUser, User } from './models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getUsers() : Observable<User>{
    return this.http.get<User>("https://reqres.in/api/users?page=2")
  }

  getSingleUser(){
    this.http.get<SingleUser>("https://reqres.in/api/users/2").subscribe( response => {
      console.log(`Single User's avatar ${response.data.avatar}`)
    })
  }

  createUser(user : CreateUser) {
    this.http.post("https://reqres.in/api/users", user).subscribe( response => {
      console.log(`create user ${JSON.stringify(response)}`)
    } )
  }

  updateUser(user : CreateUser) {
    this.http.put("https://reqres.in/api/users/2", user).subscribe( response => {
      console.log(`updated user ${JSON.stringify(response)}`)
    })
  }

  deleteUser() {
    this.http.delete<HttpResponse<any>>("https://reqres.in/api/users/3").subscribe( response => {
      console.log(`delete response status ${JSON.stringify(response)}`)
    }, (e: HttpErrorResponse) => console.log(e.status))
  }

}
