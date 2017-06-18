var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { ViewerComponent } from './gallery/viewer/viewer.component';
import { LanguageSelectorComponent } from './layout/language-selector/language-selector.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
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
            ContactComponent,
            BioComponent,
            ViewerComponent,
            LanguageSelectorComponent,
            HeaderComponent,
            NavComponent,
            FooterComponent
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map