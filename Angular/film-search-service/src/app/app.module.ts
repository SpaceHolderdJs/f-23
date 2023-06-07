import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { LikedSectionComponent } from './liked-section/liked-section.component';
import { FilmService } from './film-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    FilmCardComponent,
    MainSectionComponent,
    LikedSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
