import { Injectable } from '@angular/core';
import { FilmDataInterface } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: FilmDataInterface[] = [];

  private API_KEY = 'ed3fcd1529msheb58ea3b489c483p118b5ejsnb5d90cc97f4a';
  private url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=';
  private options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': this.API_KEY,
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  constructor() { }

  async searchFilms(filmName: string) {
    const json = await fetch(`${this.url}${filmName}`, this.options);
    const responseData = await json.json();

    if (responseData.d) {
      this.films = responseData.d;
    }

    console.log(responseData, "data");
  }
}
