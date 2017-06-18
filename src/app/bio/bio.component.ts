import {Component, OnInit, AfterContentInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit, AfterContentInit {

  static G_MOBILE_THRESHOLD: number = 768;

  activeTab: string = '';

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.initHoldTitleAndSubTitles();
  }

  initHoldTitleAndSubTitles() {

    $(document).scroll(function () {

      // Mobile/desktop fix section menu
      let i_width = window.innerWidth;
      let i_height = $('.topHeader').height();

      if (i_width > BioComponent.G_MOBILE_THRESHOLD) {
        let s = $(document).scrollTop();
        let c = $('.contentTitleWrapper').hasClass('fixedActive');
        if (!c && s > i_height) {
          $('.contentTitleWrapper').addClass('fixedActive');
        } else if (c && s <= i_height) {
          $('.contentTitleWrapper').removeClass('fixedActive');
        }
      }
      else {
        let s = $(document).scrollTop();
        let c = $('.tabLinks').hasClass('fixedActive');
        if (!c && s > 130) {
          $('.tabLinks').addClass('fixedActive');
        } else if (c && s <= 130) {
          $('.tabLinks').removeClass('fixedActive');
        }
      }


      // Change menu section selection to bold
      let s = $(document).scrollTop();
      let i_threshold = i_width > BioComponent.G_MOBILE_THRESHOLD ? 250 : 150;

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

  }

  goToTab(tab_id) {
    $("html, body").animate({scrollTop: $('#' + tab_id).offset().top - this._getThreshold()}, 500);
    this.activeTab = tab_id;
  }

  private _getThreshold() {
    return window.innerWidth > BioComponent.G_MOBILE_THRESHOLD ? 194 : 126;
  }

}
