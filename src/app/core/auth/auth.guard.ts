import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { UserService } from "../user/user.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : boolean | Observable<boolean> | Promise<boolean> {
        return false;
    }
}