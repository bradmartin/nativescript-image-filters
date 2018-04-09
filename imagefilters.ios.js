"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_source_1 = require("tns-core-modules/image-source");
var ImageFilters = (function () {
    function ImageFilters() {
        this._context = new CIContext(null);
    }
    ImageFilters.prototype.sepiaEffect = function (img, intensity) {
        var _this = this;
        if (intensity === void 0) { intensity = 0.5; }
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CISepiaTone", inputImage);
                filter.setValueForKey(intensity, kCIInputIntensityKey);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    ImageFilters.prototype.gamma = function (img, intensity) {
        var _this = this;
        if (intensity === void 0) { intensity = 1; }
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIGammaAdjust", inputImage);
                filter.setValueForKey(intensity, kCIInputBoostKey);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.invert = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIColorInvert", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.chromeEffect = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIPhotoEffectChrome", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.fadeEffect = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIPhotoEffectFade", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.vintage = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIPhotoEffectInstant", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.colorize = function (img, intensity) {
        var _this = this;
        if (intensity === void 0) { intensity = 1; }
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIColorMonochrome", inputImage);
                filter.setValueForKey(intensity, kCIInputIntensityKey);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.motionBlur = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIMotionBlur", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.comicBook = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIComicEffect", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.crystalize = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CICrystallize", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.colorEdges = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIEdges", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.coloringBook = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIEdgeWork", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.dull = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIGloom", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.threeD = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIHeightFieldFromMask", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.sketch = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CILineOverlay", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.pointillize = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIPointillize", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.spotLight = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CISpotLight", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.kaleidoscope = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIKaleidoscope", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.opTile = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIOpTile", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.perspectiveTile = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIPerspectiveTile", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.twirl = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CITwirlDistortion", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.exposure = function (img, intensity) {
        var _this = this;
        if (intensity === void 0) { intensity = 1; }
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIExposureAdjust", inputImage);
                filter.setValueForKey(intensity, kCIInputEVKey);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.brightness = function (img, intensity) {
        var _this = this;
        if (intensity === void 0) { intensity = 1; }
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIColorControls", inputImage);
                filter.setValueForKey(intensity, kCIInputBrightnessKey);
                filter.setValueForKey(1.05, kCIInputContrastKey);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.vibrant = function (img, intensity) {
        var _this = this;
        if (intensity === void 0) { intensity = 1; }
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIColorControls", inputImage);
                filter.setValueForKey(intensity * 2, kCIInputSaturationKey);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.gaussianBlur = function (img, radius) {
        var _this = this;
        if (radius === void 0) { radius = 1; }
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIGaussianBlur", inputImage);
                filter.setValueForKey(radius, kCIInputRadiusKey);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.blackAndWhite = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIPhotoEffectMono", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.tonalEffect = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIPhotoEffectTonal", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.circularWrap = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CICircularWrap", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.holeDistort = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIHoleDistortion", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.lightTunnel = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CILightTunnel", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.pinchDistort = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIPinchDistortion", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.torusLensDistort = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CITorusLensDistortion", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.vortexDistort = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIVortexDistortion", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.circularScreen = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CICircularScreen", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.halftone = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CICMYKHalftone", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.lineScreen = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CILineScreen", inputImage);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.contrast = function (img, intensity) {
        var _this = this;
        if (intensity === void 0) { intensity = 1; }
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIColorControls", inputImage);
                filter.setValueForKey(intensity * 4, kCIInputContrastKey);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.sharpen = function (img, intensity) {
        var _this = this;
        if (intensity === void 0) { intensity = 1; }
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CISharpenLuminance", inputImage);
                filter.setValueForKey(intensity, kCIInputSharpnessKey);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype.posterize = function (img, intensity) {
        var _this = this;
        if (intensity === void 0) { intensity = 1; }
        return new Promise(function (resolve, reject) {
            try {
                var inputImage = _this._createCGImage(img);
                var filter = _this._createFilter("CIColorPosterize", inputImage);
                filter.setValueForKey(intensity, kCIInputIntensityKey);
                var result = _this._processImage(filter);
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ImageFilters.prototype._createCGImage = function (img) {
        var cgImg = CIImage.alloc().initWithCGImage(img.ios.image.CGImage);
        return cgImg;
    };
    ImageFilters.prototype._createOutputCGImage = function (img) {
        var outputCGImage = this._context.createCGImageFromRect(img, img.extent);
        return outputCGImage;
    };
    ImageFilters.prototype._createFilter = function (name, img) {
        var filter = CIFilter.filterWithName(name);
        filter.setValueForKey(img, kCIInputImageKey);
        filter.setDefaults();
        return filter;
    };
    ImageFilters.prototype._processImage = function (filter) {
        var filteredImg = filter.valueForKey(kCIOutputImageKey);
        var outputCGImage = this._createOutputCGImage(filteredImg);
        var outputUIImage = UIImage.imageWithCGImage(outputCGImage);
        var result = image_source_1.fromNativeSource(outputUIImage);
        return result;
    };
    return ImageFilters;
}());
exports.ImageFilters = ImageFilters;
