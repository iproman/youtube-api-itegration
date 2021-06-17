import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGetString]'
})
export class GetStringDirective {

  constructor(
    private readonly elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.value = this.value;
  }

  get value(): string{
    const arr = [
      'Eminem',
      'Emma Stone',
      'Coldplay',
      'France',
      'Germany'
    ];

    const n = Math.floor(Math.random() * 5);
    return arr[n];
  }

}
