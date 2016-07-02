import * as imageSource from "image-source";
import { topmost } from 'ui/frame';
import { Image } from "ui/image";
import { Observable, EventData } from 'data/observable';
import { ImageFilters } from "nativescript-image-filters";

export class MainViewModel extends Observable {
  private _ImageFilters: ImageFilters;
  private _imageOne: Image;
  private _imageTwo: Image;

  private _origBmapOne;
  private _origBmapTwo;

  constructor(imageOne: Image, imageTwo: Image) {
    super();
    this._ImageFilters = new ImageFilters();
    this._imageOne = imageOne;
    this._imageTwo = imageTwo;
    this._origBmapOne = imageOne.android.getDrawable().getBitmap();
    this._origBmapTwo = imageTwo.android.getDrawable().getBitmap();
  }


  public effectReflection() {
    setTimeout(() => {
      this._ImageFilters.reflection(this._imageOne).then((result) => {

        this._imageOne.imageSource = result;

      }).catch((err) => { 
        console.log('applyFilter ERROR: ' + err);
      });
    }, 150);
  }

  public effectGreyScale() { 
    setTimeout(() => {
      this._ImageFilters.greyScale(this._imageOne).then((result) => {

        this._imageOne.imageSource = result;

      }).catch((err) => {
        console.log('applyFilter ERROR: ' + err);
      });
    }, 150);
  }

  public effectInvert() {
    setTimeout(() => {
      this._ImageFilters.invert(this._imageTwo).then((result) => {

        this._imageTwo.imageSource = result;

      }).catch((err) => {
        console.log('applyFilter ERROR: ' + err);
      });
    }, 150);
  }

  public effectSepia() {
     setTimeout(() => {
      this._ImageFilters.sepiaEffect(this._imageTwo, 150, 0.8, 0.5, 0.12).then((result) => {

        this._imageTwo.imageSource = result;

      }).catch((err) => {
        console.log('applyFilter ERROR: ' + err);
      });
    }, 150);
  }

  /**
   * name
   */
  public resetImg() {
    let resetImgSrc = imageSource.fromNativeSource(this._origBmapOne);
    this._imageOne.imageSource = resetImgSrc;
  }


  public resetImgTwo() {
    let resetImgSrc = imageSource.fromNativeSource(this._origBmapTwo);
    this._imageTwo.imageSource = resetImgSrc;
  }


}