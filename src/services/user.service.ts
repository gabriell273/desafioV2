import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/interface/user';


@Injectable({
  providedIn: "root"
})
export class UserService {
  private API = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getAll() {
    let APIUsers = this.API + "users/";
    return this.http.get<User[]>(APIUsers);
  }

  get(id){
    let APIUsers = this.API + "users/" + id;
    return this.http.get<User[]>(APIUsers);
  }

  delete(id){
    let APIUsers = this.API + "users/" + id;
    return this.http.delete<User[]>(APIUsers);
  }

  save(user:User){
    let APIUsers = this.API + "users/" + user.id;
    return this.http.put<User[]>(APIUsers,user);
  }
}
