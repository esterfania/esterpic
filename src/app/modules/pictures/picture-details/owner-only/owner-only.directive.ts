import { Directive, Input, ElementRef, Renderer, OnInit } from "@angular/core";
import { Picture } from "src/app/models";
import { UserService } from "src/app/core/user/user.service";

@Directive({
    selector: '[ownerOnly]'
})
export class OwnerOnlyDirective implements OnInit {

    @Input() ownedPicture: Picture;

    constructor(
        private el: ElementRef<any>,
        private renderer: Renderer,
        private userService: UserService) { }

    ngOnInit(): void {
        this.userService
            .getUser()
            .subscribe(user => {
                if(!user || user.id != this.ownedPicture.userId){
                    this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none')
                }
             });
    }


}