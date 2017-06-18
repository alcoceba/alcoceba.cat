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
import * as $ from 'jquery';
var BioComponent = BioComponent_1 = (function () {
    function BioComponent() {
    }
    BioComponent.prototype.ngOnInit = function () {
    };
    BioComponent.prototype.ngAfterContentInit = function () {
        this.initHoldChangeToSection();
        this.initHoldTitleAndSubTitles();
    };
    BioComponent.prototype.initHoldTitleAndSubTitles = function () {
        $(document).scroll(function () {
            // Mobile/desktop fix section menu
            var i_width = window.innerWidth;
            var i_height = $('.topHeader').height();
            if (i_width > BioComponent_1.G_MOBILE_THRESHOLD) {
                var s_1 = $(document).scrollTop();
                var c = $('.contentTitleWrapper').hasClass('fixedActive');
                if (!c && s_1 > i_height) {
                    $('.contentTitleWrapper').addClass('fixedActive');
                }
                else if (c && s_1 <= i_height) {
                    $('.contentTitleWrapper').removeClass('fixedActive');
                }
            }
            else {
                var s_2 = $(document).scrollTop();
                var c = $('.tabLinks').hasClass('fixedActive');
                if (!c && s_2 > 130) {
                    $('.tabLinks').addClass('fixedActive');
                }
                else if (c && s_2 <= 130) {
                    $('.tabLinks').removeClass('fixedActive');
                }
            }
            // Change menu section selection to bold
            var s = $(document).scrollTop();
            var i_threshold = i_width > BioComponent_1.G_MOBILE_THRESHOLD ? 250 : 150;
            if (s - $('#tabExpo').offset().top > -i_threshold) {
                $('.tabLink').removeClass('active');
                $('.tab1').addClass('active');
            }
            if (s - $('#tabPremis').offset().top > -i_threshold) {
                $('.tabLink').removeClass('active');
                $('.tab2').addClass('active');
            }
            if (s - $('#tabAssociacions').offset().top > -i_threshold) {
                $('.tabLink').removeClass('active');
                $('.tab3').addClass('active');
            }
            if (s - $('#tabBiblio').offset().top > -i_threshold) {
                $('.tabLink').removeClass('active');
                $('.tab4').addClass('active');
            }
        });
    };
    BioComponent.prototype.initHoldChangeToSection = function () {
        $('.tabLink').click(function () {
            var i_width = window.innerWidth;
            var i_threshold = i_width > BioComponent_1.G_MOBILE_THRESHOLD ? 194 : 126;
            if ($(this).hasClass('tab1')) {
                $("html, body").animate({ scrollTop: $('#tabExpo').offset().top - i_threshold }, 500);
            }
            else if ($(this).hasClass('tab2')) {
                $("html, body").animate({ scrollTop: $('#tabPremis').offset().top - i_threshold }, 500);
            }
            else if ($(this).hasClass('tab3')) {
                $("html, body").animate({ scrollTop: $('#tabAssociacions').offset().top - i_threshold }, 500);
            }
            else if ($(this).hasClass('tab4')) {
                $("html, body").animate({ scrollTop: $('#tabBiblio').offset().top - i_threshold }, 500);
            }
            $('.tabLink').removeClass('active');
            $(this).addClass('active');
            return false;
        });
    };
    return BioComponent;
}());
BioComponent.G_MOBILE_THRESHOLD = 768;
BioComponent = BioComponent_1 = __decorate([
    Component({
        selector: 'app-bio',
        templateUrl: './bio.component.html',
        styleUrls: ['./bio.component.css']
    }),
    __metadata("design:paramtypes", [])
], BioComponent);
export { BioComponent };
var BioComponent_1;
//# sourceMappingURL=bio.component.js.map