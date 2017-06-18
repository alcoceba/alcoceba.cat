import {Component, OnInit, HostListener, Inject} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  topCss: number = 0;
  s3url: string = environment.s3url;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let s = $(document).scrollTop();
    let d = 10 + (s / 20);
    if (s < 325) {
      this.topCss = d;
    }
  }
}
