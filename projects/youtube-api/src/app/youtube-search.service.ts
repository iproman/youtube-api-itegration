import { Injectable, InjectionToken } from '@angular/core';

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

  constructor() { }
}
