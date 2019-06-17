[![npm](https://img.shields.io/npm/v/nativescript-image-filters.svg)](https://www.npmjs.com/package/nativescript-image-filters)
[![npm](https://img.shields.io/npm/dt/nativescript-image-filters.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-image-filters)
[![Build Status](https://travis-ci.org/bradmartin/nativescript-image-filters.svg?branch=master)](https://travis-ci.org/bradmartin/nativescript-image-filters)
[![GitHub stars](https://img.shields.io/github/stars/bradmartin/nativescript-image-filters.svg)](https://github.com/bradmartin/nativescript-image-filters/stargazers)
[![PayPal Donate](https://img.shields.io/badge/Donate-PayPal-ff4081.svg)](https://www.paypal.me/bradwayne88)

# NativeScript-Image-Filters

Nativescript plugin for native image filters.

## Sample

![Demo](./screens/demo.gif)

### Installation

From your command prompt/termial go to your app's root folder and execute:

`tns plugin add nativescript-image-filters`

## Usage

#### JS:

```JS
import { topmost } from 'ui/frame';
import { ImageFilters } from 'nativescript-image-filters';

const filters = new ImageFilters();

public effectOne() {
  const pic = topmost().currentPage.getViewById('myPicture');

      filters.invert(pic).then((result) => {

      // set the pic imageSource equal to the new imageSource
      pic.imageSource = result;

    }).catch((err) => {
      console.log('applyFilter ERROR: ' + err);
    });
}

```

## IMPORTANT NOTE

Not all methods have been tested. The code needs to be cleaned up to reduce duplication in methods. The methods also need to be 1:1 for common methods. Right now not all iOS & Android methods are named correctly for the image filter. Pull requests are very welcome to improve the API for this plugin.

## API

- **highlightImage(img: Image, color: string, radius?: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **invert(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **blackAndWhite(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **gamma(img: Image, red: number, green: number, blue: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **colorFilter(img: Image, red: number, green: number, blue: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **sepiaEffect(img: Image, depth: number, red: number, green: number, blue: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **decreaseColorDepth(img: Image, bitOffset: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **contrast(img: Image, value: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **rotate(img: Image, degree: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **brightness(img: Image, value: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **gaussianBlur(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **createShadow(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **sharpen(img: Image, weight: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **meanRemoval(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **smooth(img: Image, value: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **emboss(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **engrave(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **boost(img: Image, type: number, percent: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **roundCorner(img: Image, round: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **waterMark(img: Image, watermark: string, location: android.graphic.Point, color: string, alpha: number, size: number, underline: boolean): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **flip(img: Image, type: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **tintImage(img: Image, degree: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **fleaEffect(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **blackFilter(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **snowEffect(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **shadingFilter(img: Image, shadingColor: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **saturationFilter(img: Image, level: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **hueFilter(img: Image, level: number): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **reflection(img: Image): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
- **replaceColor(img: Image, fromColor: string, toColor: string): Promise<[ImageSource](http://docs.nativescript.org/api-reference/classes/_image_source_.imagesource.html)>**
