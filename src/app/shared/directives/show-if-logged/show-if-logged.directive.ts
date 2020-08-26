import { Directive, OnInit, ElementRef, Renderer } from "@angular/core";

import { UserService } from "src/app/core/user/user.service";

@Directive({
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private el: ElementRef<any>,
        private userService: UserService,
        private renderer: Renderer) { }

    ngOnInit(): void {
        !this.userService.isLogged() &&
            this.renderer
                .setElementStyle(this.el.nativeElement, 'display', 'none')
    }
}