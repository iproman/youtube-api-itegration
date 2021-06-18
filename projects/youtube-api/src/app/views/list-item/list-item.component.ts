import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../Video';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="card">
      <img class="card-img-top" [src]="video.imageUrl" alt="Card image cap">
      <div class="card-body">
        <a class="card-title" href="#" >{{video.title}}</a>
        <p class="card-text">{{video.description}}</p>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ListItemComponent implements OnInit {

  // @ts-ignore
  @Input() video: Video;

  constructor() { }

  ngOnInit(): void {
  }

}
