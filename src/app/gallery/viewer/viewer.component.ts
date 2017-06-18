import {Component, OnInit, Input} from '@angular/core';
import {Picture} from "../shared/picture.model";
import {PictureService} from "../shared/picture.service";
import {transition, trigger, style, animate} from "@angular/animations";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-gallery-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate("250ms ease-out", style({opacity: 1}))
      ]),
      transition(':leave', [
        animate("250ms ease-out", style({opacity: 0}))
      ])
    ])
  ]

})
export class ViewerComponent implements OnInit {

  @Input() pictures: Picture[];
  @Input() picture: Picture;

  s3url: string = environment.s3url;

  constructor(private pictureService: PictureService) {
  }

  ngOnInit() {
  }

  closeViewer() {
    this.picture = null;
  }

  viewPrevious() {
    if (this.picture) {
      this.picture = this.pictureService.getPreviousPicture(this.pictures, this.picture);
    }
  }

  viewNext() {
    if (this.picture) {
      this.picture = this.pictureService.getNextPicture(this.pictures, this.picture);
    }
  }
}
