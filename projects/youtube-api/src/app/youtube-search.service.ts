import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video } from './Video';

const url = 'https://www.googleapis.com/youtube/v3/search';
const token = 'AIzaSyBfS5Djh48jA2HGns6nGM0IWk8bY5A0IWo';

export const injectUrl = new InjectionToken('url');
export const injectToken = new InjectionToken('api');

export const apiData = [
  {
    provide: injectUrl,
    useValue: url
  },
  {
    provide: injectToken,
    useValue: token
  }
]

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  constructor(
    private readonly httpClient: HttpClient,
    @Inject(injectUrl) private readonly apiUrl: string,
    @Inject(injectToken) private readonly apiToken: string
  ) {
  }

  getData(query: string): Observable<Video[]> {
    return this.getYoutubeData(query)
      .pipe(
        map((data: any) => {
          return data.items.map((item: any) => {
            return {
              id: item.id.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              imageUrl: item.snippet.thumbnails.high.url
            } as Video
          })
        })
      );
  }

  private getYoutubeData(query: string): Observable<any> {
    const queryParams = [
      'part=snippet',
      'maxResults=10',
      `q=${query}`,
      'regionCode=ru',
      'type=video',
      `key=${this.apiToken}`
    ];

    const urlData = `${this.apiUrl}?${queryParams.join('&')}`

    return this.httpClient.get(urlData);
  }
}
