import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewUser } from "./new-user";
import { Observable } from "rxjs";

const API_URL = "http://localhost:3000";

@Injectable()
export class SignupService {

    constructor(private http: HttpClient) { }

    checkUserNameTaken(username: string): Observable<Object> {

        return this.http.get(API_URL + '/user/exists/' + username)
    }

    signup(user: NewUser): Observable<Object> {

        return this.http.post(API_URL + '/user/signup', user);
    }
}