import {Component, OnInit, Input} from '@angular/core';
import {i18nLang} from "./shared/lang.enum";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  showLanguageMenu: boolean = false;
  langActive: string = 'ca';

  @Input() menuOpened: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.langActive = document.documentElement.lang
  }

  toggleMenu(): void {
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  changeLanguageTo(lang: string): void {
    switch (lang) {
      case 'ca':
        window.location.href = "/";
        break;
      case 'en':
        window.location.href = "/en";
        break;
    }
  }
}
