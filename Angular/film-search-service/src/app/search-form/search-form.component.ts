import { Component } from '@angular/core';
import { FilmService } from '../film-service.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  value: string = "";

  constructor (public filmService: FilmService) {}

  onInput (e: any) {
    this.value = e.target.value;
  }

  onSearch() {
    this.filmService.searchFilms(this.value);
  }
}
