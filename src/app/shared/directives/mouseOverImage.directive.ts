import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({ selector: '[mouseOverImage]' })

export class MouseOverImageDirective {
  constructor(private el: ElementRef, private renderer: Renderer){}
  @HostListener('mouseover')
  onMouseenter() {
    this.mouse("visible");
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.mouse('hidden');
  }

  private mouse(dis: string) {
    this.renderer.setElementStyle(this.el.nativeElement.getElementsByClassName("mouse-show-div")[0], 'visibility', dis)
  }
}