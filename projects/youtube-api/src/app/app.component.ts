import { Component } from '@angular/core';
import { YoutubeSearchService } from './youtube-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  constructor(
    private readonly youtubeSearchService: YoutubeSearchService
  ) {
  }


  getData(str: string): void {
    this.youtubeSearchService.getData(str).subscribe(c => {
      console.log(c);
    });
  }
}
