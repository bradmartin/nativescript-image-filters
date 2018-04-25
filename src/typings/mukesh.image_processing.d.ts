type Image = any;
type Color = number;

declare namespace com {
  export namespace mukesh {
    export namespace image_processing {
      export class ImageProcessor {
        doHighlightImage(image: Image, radius: number, color: Color): any;
        doInvert(image: Image);
        doGreyScale(image: Image);
        doGamma(image: Image, red: number, green: number, blue: number);
        doColorFilter(image: Image, red: number, green: number, blue: number);
        createSepiaToningEffect(image: Image, depth: any, red: number, green: number, blue: number);
        decreaseColorDepth(image: Image, bitOffset: any);
        createContrast(image: Image, value);
        createContrast(image: Image);
        createContrast(image: Image, value);
        applyGaussianBlur(image: Image);
        createShadow(image: Image);
        sharpen(image: Image, weight);
        applyMeanRemoval(image: Image);
        smooth(image: Image, value);
        emboss(image: Image);
        engrave(image: Image);
        boost(image: Image, type, percent);
        roundCorner(image: Image, round);
        waterMark(
          image: Image,
          watermark: string,
          location: android.graphics.Point,
          color: number,
          alpha: number,
          size: number,
          underline: boolean
        );
        flip(image: Image, type);
        tintImage(image: Image, degree);
        applyFleaEffect(image: Image);
        applyBlackFilter(image: Image);
        applySnowEffect(image: Image);
        applyShadingFilter(image: Image, shadingColor: number);
        applySaturationFilter(image: Image, level: number);
        applyHueFilter(image: Image, level);
        applyReflection(image: Image);
        replaceColor(image: Image, fromColor: Color, targetColor: Color);
      }
    }
  }
}
