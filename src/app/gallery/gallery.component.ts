import {Component, OnInit} from '@angular/core';
import {PictureService} from "./shared/picture.service";
import {Picture} from "./shared/picture.model";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [PictureService]
})
export class GalleryComponent implements OnInit {

  pictures: Picture[];
  currentPicture: Picture;
  s3url: string = environment.s3url;

  constructor(private pictureService: PictureService) {
  }

  ngOnInit() {
    this.pictureService.getPictures().then(pictures => this.pictures = pictures);
  }

  viewPicture(picture: Picture): void {
    this.currentPicture = picture;
  }
}
