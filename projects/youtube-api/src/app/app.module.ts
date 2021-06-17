import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { ListItemComponent } from './views/list-item/list-item.component';
import { SearchFieldComponent } from './views/search-field/search-field.component';
import { VideoPageComponent } from './views/video-page/video-page.component';
import { GetStringDirective } from './get-string.directive';
import { apiData, YoutubeSearchService } from './youtube-search.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    SearchFieldComponent,
    VideoPageComponent,
    GetStringDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    apiData,
    YoutubeSearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
