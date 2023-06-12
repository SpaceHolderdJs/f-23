import { Component, Input } from '@angular/core';
import { FilmDataInterface } from 'src/types';
import { FilmService } from '../film-service.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent {
  @Input() film: FilmDataInterface | null = null;
  constructor(public filmService: FilmService) { }

}
