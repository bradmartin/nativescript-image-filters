"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var image_source_1 = require("tns-core-modules/image-source");
var ImageProcessor = com.mukesh.image_processing.ImageProcessor;
var ImageFilters = (function () {
    function ImageFilters() {
        this._processor = new ImageProcessor();
    }
    ImageFilters.prototype._getBitmap = function (img) {
        var originalBitmap = img.android
            .getDrawable()
            .getBitmap();
        return originalBitmap;
    };
    ImageFilters.prototype.highlightImage = function (img, color, radius) {
        var _this = this;
        if (radius === void 0) { radius = 5; }
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !color) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.doHighlightImage(_this._getBitmap(img), radius, new color_1.Color(color).android);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.invert = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image argument is required");
                }
                var bmp = _this._processor.doInvert(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.blackAndWhite = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image is required");
                }
                var bmp = _this._processor.doGreyScale(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.gamma = function (img, red, green, blue) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !red || !green || !blue) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.doGamma(_this._getBitmap(img), red, green, blue);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.colorFilter = function (img, red, green, blue) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !red || !green || !blue) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.doColorFilter(_this._getBitmap(img), red, green, blue);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.sepiaEffect = function (img, depth, red, green, blue) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !depth || !red || !green) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.createSepiaToningEffect(_this._getBitmap(img), depth, red, green, blue);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.decreaseColorDepth = function (img, bitOffset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !bitOffset) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.decreaseColorDepth(_this._getBitmap(img), bitOffset);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.contrast = function (img, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !value) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.createContrast(_this._getBitmap(img), value);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.rotate = function (img, degree) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !degree) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.createContrast(_this._getBitmap(img), degree);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.brightness = function (img, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !value) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.createContrast(_this._getBitmap(img), value);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.gaussianBlur = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image is required");
                }
                var bmp = _this._processor.applyGaussianBlur(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.createShadow = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image is required");
                }
                var bmp = _this._processor.createShadow(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.sharpen = function (img, weight) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !weight) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.sharpen(_this._getBitmap(img), weight);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.meanRemoval = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image is required");
                }
                var bmp = _this._processor.applyMeanRemoval(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.smooth = function (img, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !value) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.smooth(_this._getBitmap(img), value);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.emboss = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image is required");
                }
                var bmp = _this._processor.emboss(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.engrave = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image is required");
                }
                var bmp = _this._processor.engrave(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.boost = function (img, type, percent) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !type || !percent) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.boost(_this._getBitmap(img), type, percent);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.roundCorner = function (img, round) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !round) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.roundCorner(_this._getBitmap(img), round);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.waterMark = function (img, watermark, location, color, alpha, size, underline) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !watermark) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.waterMark(_this._getBitmap(img), watermark, location, color, alpha, size, underline);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.flip = function (img, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !type) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.flip(_this._getBitmap(img), type);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.tintImage = function (img, degree) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !degree) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.tintImage(_this._getBitmap(img), degree);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.fleaEffect = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image is required");
                }
                var bmp = _this._processor.applyFleaEffect(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.blackFilter = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image is required");
                }
                var bmp = _this._processor.applyBlackFilter(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.snowEffect = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image is required");
                }
                var bmp = _this._processor.applySnowEffect(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.shadingFilter = function (img, shadingColor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !shadingColor) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.applyShadingFilter(_this._getBitmap(img), shadingColor);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.saturationFilter = function (img, level) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !level) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.applySaturationFilter(_this._getBitmap(img), level);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.hueFilter = function (img, level) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !level) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.applyHueFilter(_this._getBitmap(img), level);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.reflection = function (img) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img) {
                    reject("Image is required");
                }
                var bmp = _this._processor.applyReflection(_this._getBitmap(img));
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ImageFilters.prototype.replaceColor = function (img, fromColor, targetColor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!img || !fromColor || !targetColor) {
                    reject("Missing required arguments");
                }
                var bmp = _this._processor.replaceColor(_this._getBitmap(img), new color_1.Color(fromColor).android, new color_1.Color(targetColor).android);
                var isrc = image_source_1.fromNativeSource(bmp);
                resolve(isrc);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    return ImageFilters;
}());
exports.ImageFilters = ImageFilters;
