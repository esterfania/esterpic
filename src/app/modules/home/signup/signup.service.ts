import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { NewUser } from "./new-user";
import { environment } from '../../../../environments/environment';

const API = environment.apiUrl;

@Injectable()
export class SignupService {

    constructor(private http: HttpClient) { }

    checkUserNameTaken(username: string): Observable<Object> {

        return this.http.get(API + '/user/exists/' + username)
    }

    signup(user: NewUser): Observable<Object> {

        return this.http.post(API + '/user/signup', user);
    }
}