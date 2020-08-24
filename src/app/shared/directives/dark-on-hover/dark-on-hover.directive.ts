import { Directive, ElementRef, HostListener, Renderer, Input } from "@angular/core";

@Directive({
    selector: '[darkOnHover]'
})
export class DarkOnHoverDirective {

    @Input() brightness = '70%';

    constructor(private el: ElementRef,
        private render: Renderer) { }

    @HostListener('mouseover')
    onMouseOver() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`)
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)')
    }
}