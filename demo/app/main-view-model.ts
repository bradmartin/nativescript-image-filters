import * as imageSource from "image-source";
import { topmost } from 'ui/frame';
import { Image } from "ui/image";
import { Observable, EventData } from 'data/observable';
import { PhotoFilters } from "nativescript-photofilters";

export class MainViewModel extends Observable {
  private _PhotoFilters: PhotoFilters;
  private _imageOne: Image;
  private _imageTwo: Image;

  private _origBmapOne;
  private _origBmapTwo;

  constructor(imageOne: Image, imageTwo: Image) {
    super();
    this._PhotoFilters = new PhotoFilters();
    this._imageOne = imageOne;
    this._imageTwo = imageTwo;
    this._origBmapOne = imageOne.android.getDrawable().getBitmap();
    this._origBmapTwo = imageTwo.android.getDrawable().getBitmap();
  }


  public effectOne() {
    let pic = this._imageOne;

    setTimeout(() => {
      this._PhotoFilters.invert(pic).then((result) => {

        let newImageSrc = imageSource.fromNativeSource(result);
        pic.imageSource = newImageSrc;

      }).catch((err) => {
        console.log('applyFilter ERROR: ' + err);
      });
    }, 150);

  }

  public effectTwo() { 
    let pic = this._imageTwo;

    setTimeout(() => {
      // this._PhotoFilters.highlightImage(pic, '#ff4801', 20).then((result) => {
      this._PhotoFilters.engrave(pic).then((result) => {

        let newImageSrc = imageSource.fromNativeSource(result);
        pic.imageSource = newImageSrc;

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