import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  showRocket: boolean = false;
  rocketTakeOff: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.showRocket = window.pageYOffset > 500;
  }

  scrollTop() {
    this.rocketTakeOff = true;
    $("html, body").animate({scrollTop: 0, easing: 'linear'}, 500, () => {
      this.rocketTakeOff = false;
    });
  }
}
