import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styles: [
  ]
})
export class SearchFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(value: string): void {
    console.log(value)
  }
}
