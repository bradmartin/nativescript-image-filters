import { Image } from "tns-core-modules/ui/image";
import { ImageSource } from "tns-core-modules/image-source";
export declare class ImageFilters {
  private _processor;
  constructor();
  private _getBitmap(img);
  highlightImage(
    img: Image,
    color: string,
    radius?: number
  ): Promise<ImageSource>;
  invert(img: Image): Promise<ImageSource>;
  greyScale(img: Image): Promise<ImageSource>;
  gamma(
    img: Image,
    red: number,
    green: number,
    blue: number
  ): Promise<ImageSource>;
  colorFilter(
    img: Image,
    red: number,
    green: number,
    blue: number
  ): Promise<ImageSource>;
  sepiaEffect(
    img: Image,
    depth: number,
    red: number,
    green: number,
    blue: number
  ): Promise<ImageSource>;
  decreaseColorDepth(img: Image, bitOffset: number): Promise<ImageSource>;
  contrast(img: Image, value: number): Promise<ImageSource>;
  rotate(img: Image, degree: number): Promise<ImageSource>;
  brightness(img: Image, value: number): Promise<ImageSource>;
  gaussianBlur(img: Image): Promise<ImageSource>;
  createShadow(img: Image): Promise<ImageSource>;
  sharpen(img: Image, weight: number): Promise<ImageSource>;
  meanRemoval(img: Image): Promise<ImageSource>;
  smooth(img: Image, value: number): Promise<ImageSource>;
  emboss(img: Image): Promise<ImageSource>;
  engrave(img: Image): Promise<ImageSource>;
  boost(img: Image, type: number, percent: number): Promise<ImageSource>;
  roundCorner(img: Image, round: number): Promise<ImageSource>;
  waterMark(
    img: Image,
    watermark: string,
    location: android.graphics.Point,
    color: number,
    alpha: number,
    size: number,
    underline: boolean
  ): Promise<ImageSource>;
  flip(img: Image, type: number): Promise<ImageSource>;
  tintImage(img: Image, degree: number): Promise<ImageSource>;
  fleaEffect(img: Image): Promise<ImageSource>;
  blackFilter(img: Image): Promise<ImageSource>;
  snowEffect(img: Image): Promise<ImageSource>;
  shadingFilter(img: Image, shadingColor: number): Promise<ImageSource>;
  saturationFilter(img: Image, level: number): Promise<ImageSource>;
  hueFilter(img: Image, level: number): Promise<ImageSource>;
  reflection(img: Image): Promise<ImageSource>;
  replaceColor(
    img: Image,
    fromColor: string,
    targetColor: string
  ): Promise<ImageSource>;
}
