/***************************************************************************************
* Made for the {N} community by Brad Martin @BradWayneMartin
* and nStudio, LLC. Contact team@nstudio.io for consulting and NativeScript + Angular training.
* https://twitter.com/BradWayneMartin
* https://github.com/bradmartin
* https://bradmartin.net
*************************************************************************************/

import { isIOS } from "tns-core-modules/platform";
import { Image } from "tns-core-modules/ui/image";
import { Color } from "tns-core-modules/color";
import { ImageSource, fromNativeSource } from "tns-core-modules/image-source";

export class ImageFilters {
  private _context: CIContext;

  constructor() {
    this._context = new CIContext(null);
  }

  public sepiaEffect(
    img: Image,
    intensity: number = 0.5
  ): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CISepiaTone", inputImage);
        filter.setValueForKey(intensity, kCIInputIntensityKey); // set the intensity
        const result = this._processImage(filter);
        resolve(result);
      } catch (ex) {
        reject(ex);
      }
    });
  }

  public gamma(img: Image, intensity: number = 1) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIGammaAdjust", inputImage);
        filter.setValueForKey(intensity, kCIInputBoostKey);

        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public invert(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIColorInvert", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public chromeEffect(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIPhotoEffectChrome", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public fadeEffect(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIPhotoEffectFade", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public vintage(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIPhotoEffectInstant", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public colorize(img: Image, intensity: number = 1) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIColorMonochrome", inputImage);
        filter.setValueForKey(intensity, kCIInputIntensityKey);

        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public motionBlur(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIMotionBlur", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public comicBook(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIComicEffect", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public crystalize(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CICrystallize", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public colorEdges(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIEdges", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public coloringBook(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIEdgeWork", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public dull(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIGloom", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public threeD(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIHeightFieldFromMask", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public sketch(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CILineOverlay", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public pointillize(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIPointillize", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public spotLight(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CISpotLight", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public kaleidoscope(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIKaleidoscope", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public opTile(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIOpTile", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public perspectiveTile(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIPerspectiveTile", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public twirl(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CITwirlDistortion", inputImage);

        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public exposure(img: Image, intensity: number = 1) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIExposureAdjust", inputImage);
        filter.setValueForKey(intensity, kCIInputEVKey);

        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public brightness(img: Image, intensity: number = 1) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIColorControls", inputImage);
        filter.setValueForKey(intensity, kCIInputBrightnessKey);
        filter.setValueForKey(1.05, kCIInputContrastKey);

        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public vibrant(img: Image, intensity: number = 1) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIColorControls", inputImage);
        filter.setValueForKey(intensity * 2, kCIInputSaturationKey);

        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public gaussianBlur(img: Image, radius: number = 1) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIGaussianBlur", inputImage);
        filter.setValueForKey(radius, kCIInputRadiusKey);

        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public blackAndWhite(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIPhotoEffectMono", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Applies a preconfigured set of effects that imitate black-and-white photography film without significantly altering contrast.
   * @param img [Image]
   */
  public tonalEffect(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIPhotoEffectTonal", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public circularWrap(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CICircularWrap", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public holeDistort(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIHoleDistortion", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public lightTunnel(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CILightTunnel", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public pinchDistort(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIPinchDistortion", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public torusLensDistort(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CITorusLensDistortion", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public vortexDistort(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIVortexDistortion", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public circularScreen(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CICircularScreen", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public halftone(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CICMYKHalftone", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public lineScreen(img: Image) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CILineScreen", inputImage);
        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public contrast(img: Image, intensity: number = 1) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIColorControls", inputImage);
        filter.setValueForKey(intensity * 4, kCIInputContrastKey);

        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public sharpen(img: Image, intensity: number = 1) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CISharpenLuminance", inputImage);
        filter.setValueForKey(intensity, kCIInputSharpnessKey);

        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public posterize(img: Image, intensity: number = 1) {
    return new Promise((resolve, reject) => {
      try {
        const inputImage = this._createCGImage(img);
        const filter = this._createFilter("CIColorPosterize", inputImage);
        filter.setValueForKey(intensity, kCIInputIntensityKey);

        const result = this._processImage(filter);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  private _createCGImage(img) {
    const cgImg = CIImage.alloc().initWithCGImage(img.ios.image.CGImage);
    return cgImg;
  }

  private _createOutputCGImage(img) {
    const outputCGImage = this._context.createCGImageFromRect(img, img.extent);
    return outputCGImage;
  }

  private _createFilter(name: string, img: CIImage): CIFilter {
    const filter = CIFilter.filterWithName(name);
    filter.setValueForKey(img, kCIInputImageKey);
    filter.setDefaults();
    return filter;
  }

  private _processImage(filter): ImageSource {
    const filteredImg = filter.valueForKey(kCIOutputImageKey);
    const outputCGImage = this._createOutputCGImage(filteredImg);
    const outputUIImage = UIImage.imageWithCGImage(outputCGImage);
    const result = fromNativeSource(outputUIImage);
    return result;
  }
}
