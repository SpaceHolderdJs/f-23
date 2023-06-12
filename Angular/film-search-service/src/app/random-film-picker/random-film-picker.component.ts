import { Component } from '@angular/core';
import { FilmService } from '../film-service.service';
import { FilmDataInterface } from 'src/types';

@Component({
  selector: 'app-random-film-picker',
  templateUrl: './random-film-picker.component.html',
  styleUrls: ['./random-film-picker.component.css']
})
export class RandomFilmPickerComponent {
  constructor(public filmService: FilmService) { }

  randomFilm: FilmDataInterface | null = null;

  onRandomButonClick() {
    this.randomFilm = this.filmService.getRandomFilmToWatch();
  }

}
