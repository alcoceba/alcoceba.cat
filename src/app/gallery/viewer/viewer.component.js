var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Picture } from "../shared/picture.model";
import { PictureService } from "../shared/picture.service";
var ViewerComponent = (function () {
    function ViewerComponent(pictureService) {
        this.pictureService = pictureService;
    }
    ViewerComponent.prototype.ngOnInit = function () {
    };
    ViewerComponent.prototype.closeViewer = function () {
        this.picture = null;
    };
    ViewerComponent.prototype.viewPrevious = function () {
        if (this.picture) {
            this.picture = this.pictureService.getPreviousPicture(this.pictures, this.picture);
        }
    };
    ViewerComponent.prototype.viewNext = function () {
        if (this.picture) {
            this.picture = this.pictureService.getNextPicture(this.pictures, this.picture);
        }
    };
    return ViewerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], ViewerComponent.prototype, "pictures", void 0);
__decorate([
    Input(),
    __metadata("design:type", Picture)
], ViewerComponent.prototype, "picture", void 0);
ViewerComponent = __decorate([
    Component({
        selector: 'app-gallery-viewer',
        templateUrl: './viewer.component.html',
        styleUrls: ['./viewer.component.css']
    }),
    __metadata("design:paramtypes", [PictureService])
], ViewerComponent);
export { ViewerComponent };
//# sourceMappingURL=viewer.component.js.map