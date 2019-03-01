import { topmost } from 'tns-core-modules/ui/frame';
import { Image } from 'tns-core-modules/ui/image';
import { Observable } from 'tns-core-modules/data/observable';
import { ImageFilters } from 'nativescript-image-filters';

export class MainViewModel extends Observable {
  private _ImageFilters: ImageFilters;

  constructor() {
    super();
    this._ImageFilters = new ImageFilters();
  }

  resetBart(args) {
    const img = topmost().getViewById('imageOne') as Image;
    img.src = null;
    setTimeout(() => {
      img.src = '~/images/bart.png';
    }, 100);
  }

  resetMaury(args) {
    const img = topmost().getViewById('imageTwo') as Image;
    img.src = null;
    setTimeout(() => {
      img.src = '~/images/maury.jpg';
    }, 100);
  }

  public effectEngrave() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.engrave(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('engrave ERROR: ' + err);
      }
    );
  }

  public doBlackWhite() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.blackAndWhite(img).then(
      result => {
        img.imageSource = result;
      },
      err => {
        console.log('blackAndWhite ERROR: ' + err);
      }
    );
  }

  public effectInvert() {
    const img = topmost().getViewById('imageTwo') as Image;

    this._ImageFilters.invert(img).then(
      result => {
        img.imageSource = result;
      },
      err => {
        console.log('invert ERROR: ' + err);
      }
    );
  }

  public effectSepia() {
    const img = topmost().getViewById('imageTwo') as Image;

    this._ImageFilters.sepiaEffect(img, 1, 0.8, 0.5, 0.12).then(
      result => {
        img.imageSource = result;
      },
      err => {
        console.log('sepiaEffect ERROR: ' + err);
      }
    );
  }
}
