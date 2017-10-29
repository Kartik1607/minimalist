import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideComponent } from './slide/slide.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HoverImageComponent } from './hover-image/hover-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    SlideshowComponent,
    SlideComponent,
    GalleryComponent,
    HoverImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
