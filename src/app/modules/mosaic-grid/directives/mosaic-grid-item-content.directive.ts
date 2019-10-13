import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMosaicGridItemContent]'
})
export class MosaicGridItemContentDirective {
  constructor(public readonly el: ElementRef) {}
}
