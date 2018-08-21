/***************************************************************************************
 * Made for the {N} by Brad Martin @BradWayneMartin
 * https://twitter.com/BradWayneMartin
 * https://github.com/bradmartin
 * http://bradmartin.net
 * Open Source Lib : https://github.com/mukeshsolanki/photofilter
 *************************************************************************************/
/// <reference path="./typings/mukesh.image_processing.d.ts" />
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

import { Image } from 'tns-core-modules/ui/image';
import { Color } from 'tns-core-modules/color';
import { ImageSource, fromNativeSource } from 'tns-core-modules/image-source';

declare const net: any;

export class ImageFilters {
  private _processor: com.mukesh.image_processing.ImageProcessor;

  constructor() {
    this._processor = new com.mukesh.image_processing.ImageProcessor();
  }

  /**
   * Helper method to get the Bitmap from the NativeScript Image component
   * @param { Image } img
   */
  private _getBitmap(img: Image): android.graphics.Bitmap {
    const bm = net.bradmartin.flexing.ImagesKt.getBitmapFromImageView(img.android) as android.graphics.Bitmap;
    return bm;
  }

  public highlightImage(img: Image, color: string, radius: number = 5): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !color) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.doHighlightImage(this._getBitmap(img), radius, new Color(color).android);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public invert(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image argument is required');
        }

        const bmp = this._processor.doInvert(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public blackAndWhite(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image is required');
        }

        const bmp = this._processor.doGreyScale(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public gamma(img: Image, red: number, green: number, blue: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !red || !green || !blue) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.doGamma(this._getBitmap(img), red, green, blue);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public colorFilter(img: Image, red: number, green: number, blue: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !red || !green || !blue) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.doColorFilter(this._getBitmap(img), red, green, blue);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public sepiaEffect(img: Image, depth: number, red: number, green: number, blue: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !depth || !red || !green) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.createSepiaToningEffect(this._getBitmap(img), depth, red, green, blue);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public decreaseColorDepth(img: Image, bitOffset: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !bitOffset) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.decreaseColorDepth(this._getBitmap(img), bitOffset);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public contrast(img: Image, value: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !value) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.createContrast(this._getBitmap(img), value);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public rotate(img: Image, degree: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !degree) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.rotate(this._getBitmap(img), degree);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public brightness(img: Image, value: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !value) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.doBrightness(this._getBitmap(img), value);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public gaussianBlur(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image is required');
        }

        const bmp = this._processor.applyGaussianBlur(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public createShadow(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image is required');
        }

        const bmp = this._processor.createShadow(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public sharpen(img: Image, weight: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !weight) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.sharpen(this._getBitmap(img), weight);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public meanRemoval(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image is required');
        }

        const bmp = this._processor.applyMeanRemoval(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public smooth(img: Image, value: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !value) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.smooth(this._getBitmap(img), value);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public emboss(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image is required');
        }

        const bmp = this._processor.emboss(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public engrave(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image is required');
        }

        const bmp = this._processor.engrave(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public boost(img: Image, type: number, percent: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !type || !percent) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.boost(this._getBitmap(img), type, percent);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public roundCorner(img: Image, round: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !round) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.roundCorner(this._getBitmap(img), round);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public waterMark(
    img: Image,
    watermark: string,
    location: android.graphics.Point,
    color: number,
    alpha: number,
    size: number,
    underline: boolean
  ): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !watermark) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.waterMark(this._getBitmap(img), watermark, location, color, alpha, size, underline);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public flip(img: Image, type: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !type) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.flip(this._getBitmap(img), type);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public tintImage(img: Image, degree: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !degree) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.tintImage(this._getBitmap(img), degree);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public fleaEffect(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image is required');
        }

        const bmp = this._processor.applyFleaEffect(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public blackFilter(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image is required');
        }

        const bmp = this._processor.applyBlackFilter(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public snowEffect(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image is required');
        }

        const bmp = this._processor.applySnowEffect(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public shadingFilter(img: Image, shadingColor: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !shadingColor) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.applyShadingFilter(this._getBitmap(img), shadingColor);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public saturationFilter(img: Image, level: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !level) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.applySaturationFilter(this._getBitmap(img), level);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public hueFilter(img: Image, level: number): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !level) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.applyHueFilter(this._getBitmap(img), level);
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public reflection(img: Image): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img) {
          reject('Image is required');
        }

        const bmp = this._processor.applyReflection(this._getBitmap(img));
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }

  public replaceColor(img: Image, fromColor: string, targetColor: string): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        if (!img || !fromColor || !targetColor) {
          reject('Missing required arguments');
        }

        const bmp = this._processor.replaceColor(
          this._getBitmap(img),
          new Color(fromColor).android,
          new Color(targetColor).android
        );
        const isrc = fromNativeSource(bmp);
        resolve(isrc);
      } catch (err) {
        reject(err);
      }
    });
  }
}
