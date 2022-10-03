import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[D-Text-Transform]'
})
export class TextTransformDirective {

  constructor() { }

  @HostBinding('style.text-transform') get textTransfor(){
    return `capitalize`;
  }
}
