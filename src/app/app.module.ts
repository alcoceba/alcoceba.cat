import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';
import {BioComponent} from './bio/bio.component';
import {ViewerComponent} from './gallery/viewer/viewer.component';
import {LanguageSelectorComponent} from './layout/nav/language-selector/language-selector.component';
import {HeaderComponent} from './layout/header/header.component';
import {NavComponent} from './layout/nav/nav.component';
import {FooterComponent} from './layout/footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuComponent} from './layout/nav/menu/menu.component';
import { ScrollTopComponent } from './layout/scroll-top/scroll-top.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: GalleryComponent
      },
      {
        path: 'bio',
        component: BioComponent
      },
      {
        path: 'contactar',
        component: ContactComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    GalleryComponent,
    ViewerComponent,
    ContactComponent,
    BioComponent,
    HeaderComponent,
    NavComponent,
    MenuComponent,
    LanguageSelectorComponent,
    FooterComponent,
    ScrollTopComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
