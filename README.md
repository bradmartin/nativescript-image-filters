[![npm](https://img.shields.io/npm/v/nativescript-image-filters.svg)](https://www.npmjs.com/package/nativescript-image-filters)
[![npm](https://img.shields.io/npm/dt/nativescript-image-filters.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-image-filters)


# NativeScript-Image-Filters
Nativescript plugin for native image filters.


## Sample

![Demo](./screens/demo.gif)

#### Native Library
[Photo Filter](https://github.com/mukeshsolanki/photofilter)

### Installation
From your command prompt/termial go to your app's root folder and execute:

`tns plugin add nativescript-image-filters`

## Usage
#### JS:
```JS
import { topmost } from 'ui/frame';
import { ImageFilters } from 'nativescript-image-filters';

let filters = new ImageFilters();

public effectOne() {
  let pic = topmost().currentPage.getViewById('myPicture');

      filters.invert(pic).then((result) => {

      // set the pic imageSource equal to the new imageSource
      pic.imageSource = result;

    }).catch((err) => {
      console.log('applyFilter ERROR: ' + err);
    });
}

```

## API

- **highlightImage(img: Image, color: string, radius?: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **invert(img: Image):  Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **greyScale(img: Image):  Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **gamma(img: Image, red: number, green: number, blue: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **colorFilter(img: Image, red: number, green: number, blue: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **sepiaEffect(img: Image, depth: number, red: number, green: number, blue: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **decreaseColorDepth(img: Image, bitOffset: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **contrast(img: Image, value: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **rotate(img: Image, degree: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **brightness(img: Image, value: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **gaussianBlur(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **createShadow(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **sharpen(img: Image, weight: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **meanRemoval(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **smooth(img: Image, value: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **emboss(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **engrave(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **boost(img: Image, type: number, percent: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **roundCorner(img: Image, round: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **waterMark(img: Image, watermark: string, location: android.graphic.Point, color: string, alpha: number, size: number, underline: boolean): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **flip(img: Image, type: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **tintImage(img: Image, degree: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **fleaEffect(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **blackFilter(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **snowEffect(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **shadingFilter(img: Image, shadingColor: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **saturationFilter(img: Image, level: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **hueFilter(img: Image, level: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **reflection(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**
- **replaceColor(img: Image, fromColor: string, toColor: string): Promise<[ImageSource](http://docs.nativescript.org/api-reference/modules/_image_source_.html)>**