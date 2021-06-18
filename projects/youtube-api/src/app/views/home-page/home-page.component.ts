import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../Video';
import { YoutubeSearchService } from '../../youtube-search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent {

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
