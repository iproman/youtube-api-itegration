import { Component } from '@angular/core';
import { YoutubeSearchService } from './youtube-search.service';
import { Observable } from 'rxjs';
import { Video } from './Video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  // @ts-ignore
  data$: Observable<Video[]>

  constructor(
    private readonly youtubeSearchService: YoutubeSearchService
  ) {
  }


  getData(str: string): void {
    this.data$ = this.youtubeSearchService.getData(str);
  }
}
