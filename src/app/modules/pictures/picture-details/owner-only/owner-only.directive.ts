import { Directive, Input, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { Picture } from "src/app/models";
import { UserService } from "src/app/core/user/user.service";

@Directive({
    selector: '[ownerOnly]'
})
export class OwnerOnlyDirective implements OnInit {

    @Input() ownedPicture: Picture;

    constructor(
        private el: ElementRef<any>,
        private renderer: Renderer2,
        private userService: UserService) { }

    ngOnInit(): void {
        this.userService
            .getUser()
            .subscribe(user => {
                if(!user || user.id != this.ownedPicture.userId){
                    this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
                }
             });
    }


}