import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styles: []
})
export class SearchFieldComponent {

  @Output() query: EventEmitter<string> = new EventEmitter<string>();

  search(value: string): void {
    if (value) this.query.emit(value);
  }
}
