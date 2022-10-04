import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[D-Event-Card]'
})
export class EventCardDirective {

  constructor() { }

  @HostListener('mouseenter') mouseenter(){
    this.onMouseEnter = true;
    this.transition
  }

  @HostListener('mouseleave') mouseleave(){
    this.onMouseEnter = false;
    this.transition
  }

  @HostBinding('class.pokemon-card-mouse-enter') onMouseEnter:boolean = false;
  @HostBinding('style.transition') transition:string = "all 1s ease-out";
}
