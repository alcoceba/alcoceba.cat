var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { PICTURES } from "./mock-picture";
var PictureService = (function () {
    function PictureService() {
    }
    PictureService.prototype.getPictures = function () {
        return Promise.resolve(PICTURES);
    };
    PictureService.prototype.getNextPicture = function (pictures, current) {
        var next = false;
        for (var _i = 0, pictures_1 = pictures; _i < pictures_1.length; _i++) {
            var picture = pictures_1[_i];
            if (next) {
                return picture;
            }
            if (picture.src === current.src) {
                next = true;
            }
        }
        return typeof PICTURES[0] !== 'undefined' ? PICTURES[0] : null;
    };
    PictureService.prototype.getPreviousPicture = function (pictures, current) {
        var prev = null;
        for (var _i = 0, pictures_2 = pictures; _i < pictures_2.length; _i++) {
            var picture = pictures_2[_i];
            if (picture.src === current.src) {
                return !prev ? pictures[pictures.length - 1] : prev;
            }
            prev = picture;
        }
        return null;
    };
    return PictureService;
}());
PictureService = __decorate([
    Injectable()
], PictureService);
export { PictureService };
//# sourceMappingURL=picture.service.js.map