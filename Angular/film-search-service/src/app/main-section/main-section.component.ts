import { Component } from '@angular/core';
import { FilmService } from '../film-service.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {
  constructor(public filmService: FilmService) { }

}
