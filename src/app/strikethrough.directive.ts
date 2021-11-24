import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private element:ElementRef) { }

  @HostListener("click") onClicks() {
    this.textDecoration("line-through")
  }
  @HostListener("dblClick") onDoubleClicks() {
    this.textDecoration("None")
  }
     private textDecoration(action: string) {

      this.element.nativeElement.style.textDecoration = action;
  
    }
  
  }
