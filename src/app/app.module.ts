import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentsComponent } from './components/contents/contents.component';
import { MaterialModule } from './modules/material/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TextTransformDirective } from './directives/text-transform.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentsComponent,
    PageNotFoundComponent,
    TextTransformDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
