import { Component } from '@angular/core';
import { FilmService } from '../film-service.service';

@Component({
  selector: 'app-liked-section',
  templateUrl: './liked-section.component.html',
  styleUrls: ['./liked-section.component.css']
})
export class LikedSectionComponent {
  constructor(public filmService: FilmService) { }

  likedFilms = this.filmService.getLikedFilms();
}
