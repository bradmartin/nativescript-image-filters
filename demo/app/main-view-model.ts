import { fromNativeSource } from 'tns-core-modules/image-source';
import { topmost } from 'tns-core-modules/ui/frame';
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import { Image } from 'tns-core-modules/ui/image';
import { Observable, EventData } from 'tns-core-modules/data/observable';
import { ImageFilters } from 'nativescript-image-filters';

export class MainViewModel extends Observable {
  private _ImageFilters: ImageFilters;

  constructor() {
    super();
    this._ImageFilters = new ImageFilters();
  }

  public effectSharpen() {
    setTimeout(() => {
      const img = topmost().getViewById('imageOne') as Image;
      this._ImageFilters.sharpen(img, 1).then(
        result => {
          console.log(result);
          img.imageSource = result;
        },
        err => {
          console.log('applyFilter ERROR: ' + err);
        }
      );
    }, 150);
  }

  public doBlackWhite() {
    setTimeout(() => {
      const img = topmost().getViewById('imageOne') as Image;
      this._ImageFilters.blackAndWhite(img).then(
        result => {
          console.log(result);
          img.imageSource = result;
        },
        err => {
          console.log('applyFilter ERROR: ' + err);
        }
      );
    }, 150);
  }

  public effectInvert() {
    setTimeout(() => {
      const img = topmost().getViewById('imageTwo') as Image;

      this._ImageFilters.invert(img).then(
        result => {
          img.imageSource = result;
        },
        err => {
          console.log('applyFilter ERROR: ' + err);
        }
      );
    }, 150);
  }

  public effectSepia() {
    setTimeout(() => {
      const img = topmost().getViewById('imageTwo') as Image;

      this._ImageFilters.sepiaEffect(img, 1, 0.8, 0.5, 0.12).then(
        result => {
          img.imageSource = result;
        },
        err => {
          console.log('applyFilter ERROR: ' + err);
        }
      );
    }, 150);
  }
}
