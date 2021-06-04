import {
  Frame,
  Image,
  ImageSource,
  isAndroid,
  Observable,
  ScrollView,
  StackLayout,
  WrapLayout,
} from '@nativescript/core';
import { ImageFilters } from 'nativescript-image-filters';

export class MainViewModel extends Observable {
  private _ImageFilters: ImageFilters;

  constructor() {
    super();
    this._ImageFilters = new ImageFilters();
  }

  resetBart(args) {
    const img = Frame.topmost().getViewById('imageOne') as Image;
    img.src = null;
    setTimeout(() => {
      img.src = '~/images/bart.png';
    }, 100);
  }

  resetMaury(args) {
    const img = Frame.topmost().getViewById('imageTwo') as Image;
    img.src = null;
    setTimeout(() => {
      img.src = '~/images/maury.jpg';
    }, 100);
  }

  public effectEngrave() {
    const img = Frame.topmost().getViewById('imageOne') as Image;
    this._ImageFilters.engrave(img).then(
      (result) => {
        console.log(result);
        img.imageSource = result;
      },
      (err) => {
        console.log('engrave ERROR: ' + err);
      }
    );
  }

  public doBlackWhite() {
    const img = Frame.topmost().getViewById('imageOne') as Image;
    this._ImageFilters.blackAndWhite(img).then(
      (result) => {
        img.imageSource = result;
      },
      (err) => {
        console.log('blackAndWhite ERROR: ' + err);
      }
    );
  }

  public effectInvert() {
    const img = Frame.topmost().getViewById('imageTwo') as Image;

    if (isAndroid) {
      this._ImageFilters.invert(img).then(
        (result) => {
          img.imageSource = result;
        },
        (err) => {
          console.log('invert ERROR: ' + err);
        }
      );
    } else {
      console.log('Engrave is not an iOS image filter.');
    }
  }

  public effectSepia() {
    const img = Frame.topmost().getViewById('imageTwo') as Image;

    this._ImageFilters.sepiaEffect(img, 1, 0.8, 0.5, 0.12).then(
      (result) => {
        img.imageSource = result;
      },
      (err) => {
        console.log('sepiaEffect ERROR: ' + err);
      }
    );
  }

  public createImageTap() {
    // create a new Image
    const newImage = new Image();
    newImage.id = 'newBartImage';
    // set the src
    newImage.src = '~/images/bart.png';
    newImage.height = 'auto';
    newImage.width = 'auto';

    const wl = Frame.topmost().getViewById('newImageWrapLayout') as WrapLayout;
    // add image to the WL
    wl.addChild(newImage);

    // const sv = Frame.topmost().getViewById('mainScrollView') as ScrollView;
    // sv?.scrollToVerticalOffset(sv.scrollableHeight, true);

    setTimeout(() => {
      this._ImageFilters.blackAndWhite(newImage).then((res: ImageSource) => {
        console.log('New Image has applied the black and white filter.');
        newImage.src = res;
      });
    }, 3500);
  }

  /**
   * resetNewImage
   */
  public resetNewImage() {
    const img = Frame.topmost().getViewById('newBartImage') as Image;
    img.src = null;
    const wl = Frame.topmost().getViewById('newImageWrapLayout') as WrapLayout;
    wl.removeChild(img);
  }

  public localImageFilePathTest() {
    const sl = Frame.topmost().getViewById('fromPathTestLayout') as StackLayout;

    const imgF = ImageSource.fromFileSync('~/images/bart.png');
    const image = new Image() as Image;
    image.src = imgF;

    sl.addChild(image);


    setTimeout(() => {
      // And then apply the filters like eg:
      this._ImageFilters.blackAndWhite(image).then((res: ImageSource) => {
        console.log(res); // this is the resulting ImageSource from the promise result
        image.src = res;
      });
    }, 2000);
  }

  public localImageResourcePathTest() {
    const sl = Frame.topmost().getViewById('fromResourceTestLayout') as StackLayout;
    const imgR = ImageSource.fromResourceSync('icon');
    const image = new Image() as Image;
    image.src = imgR;

    sl.addChild(image);

    setTimeout(() => {
      // And then apply the filters like eg:
      this._ImageFilters
        .sepiaEffect(image, 1, 0.8, 0.5, 0.12)
        .then((res: ImageSource) => {
          image.src = res;
        });
    }, 2000);
  }
}
