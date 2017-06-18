var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var LanguageSelectorComponent = (function () {
    function LanguageSelectorComponent() {
        this.showLanguageMenu = false;
    }
    LanguageSelectorComponent.prototype.ngOnInit = function () {
    };
    LanguageSelectorComponent.prototype.toggleMenu = function () {
        this.showLanguageMenu = !this.showLanguageMenu;
    };
    LanguageSelectorComponent.prototype.changeLanguageTo = function (lang) {
        // TODO change language to lang
    };
    return LanguageSelectorComponent;
}());
LanguageSelectorComponent = __decorate([
    Component({
        selector: 'app-language-selector',
        templateUrl: './language-selector.component.html',
        styleUrls: ['./language-selector.component.css']
    }),
    __metadata("design:paramtypes", [])
], LanguageSelectorComponent);
export { LanguageSelectorComponent };
//# sourceMappingURL=language-selector.component.js.map