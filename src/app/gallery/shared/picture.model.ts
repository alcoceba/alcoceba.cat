export class Picture {

  src: string;
  dimensions: string;
  tec: string;
  title: string;

  constructor(src: string, title: string, tec: string, dimensions: string) {
    this.src = src;
    this.title = title;
    this.tec = tec;
    this.dimensions = dimensions;
  }

  static loadCollectionFromJson(jsonObject): Picture[] {
    let picturesCollection: Picture[] = [];
    jsonObject.forEach((picture) => {
      let lang = picture.lang.filter((lang) => lang.lang == document.documentElement.lang)[0];
      picturesCollection.push(new Picture(picture.src, lang.title, lang.tec, picture.dimensions));
    });
    return picturesCollection;
  }

  getFullTitle(): string {
    return this.title + ' - Alcoceba Serrà - ' + this.tec + ' - ' + this.dimensions;
  }

}


