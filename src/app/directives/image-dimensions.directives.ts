import {Directive, ElementRef, Input} from '@angular/core';

@Directive({ selector: '[appImageDimensions]' })

export class ImageDimensionsDirectives {

  @Input() width: number;
  @Input() height: number;

  constructor(el: ElementRef) {
    el.nativeElement.width = this.width;
    el.nativeElement.height = this.height;
  }
}
