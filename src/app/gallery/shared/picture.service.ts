import {Injectable} from '@angular/core';
import {PICTURES} from "./mock-picture";
import {Picture} from "./picture.model";

@Injectable()
export class PictureService {

  getPictures() {
    return Promise.resolve(Picture.loadCollectionFromJson(PICTURES));
  }

  getNextPicture(pictures: Picture[], current: Picture): Picture {
    let next = false;
    for (let picture of pictures) {
      if (next) {
        return picture;
      }
      if (picture.src === current.src) {
        next = true;
      }
    }
    return typeof pictures[0] !== 'undefined' ? pictures[0] : null;
  }

  getPreviousPicture(pictures: Picture[], current: Picture): Picture {
    let prev: Picture = null;
    for (let picture of pictures) {
      if (picture.src === current.src) {
        return !prev ? pictures[pictures.length - 1] : prev;
      }
      prev = picture;
    }
    return null;
  }
}
