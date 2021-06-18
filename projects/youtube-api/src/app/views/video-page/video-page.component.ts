import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-page',
  template: `
    <youtube-player
    [videoId]="id"
    ></youtube-player>
  `,
  styles: [
  ]
})
export class VideoPageComponent implements OnInit {
  id: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {
    // @ts-ignore
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
