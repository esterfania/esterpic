import { Component } from "@angular/core";
import { UserService } from "../user/user.service";
import { User } from "../user/user";
import { Observable } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    user$: Observable<User>;
    user: User;

    constructor(private userService: UserService) {
        this.getUser();
    }

    getUser() {
        this.user$ = this.userService.getUser();
        this.user$
            .subscribe(res => this.user = res);
    }
}