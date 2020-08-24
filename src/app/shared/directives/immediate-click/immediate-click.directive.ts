import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatFormDetectorService } from "src/app/core";

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private el: ElementRef<any>,
        private platformDetector: PlatFormDetectorService) { }

    ngOnInit(): void {
        this.platformDetector.isPlatformBrowser() &&
            this.el.nativeElement.click();
    }

}