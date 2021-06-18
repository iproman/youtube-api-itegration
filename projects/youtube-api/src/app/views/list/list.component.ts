import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../Video';

@Component({
  selector: 'app-list',
  template: `
    <div *ngIf="data$ | async as videos">
      <div class="row">
        <div class="col-4" *ngFor="let video of videos">
          <app-list-item [video]="video"></app-list-item>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  // @ts-ignore
  @Input() data$: Observable<Video[]>

  constructor() {
  }

  ngOnInit(): void {
  }

}
