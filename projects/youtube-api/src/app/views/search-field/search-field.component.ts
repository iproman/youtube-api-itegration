import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-field',
  template: `
    <div class="input-group mb-3 mt-5">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
    </div>
  `,
  styles: [
  ]
})
export class SearchFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
