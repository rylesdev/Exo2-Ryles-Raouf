import { Component } from '@angular/core';
import { NgClass, UpperCasePipe } from '@angular/common';
import { Film } from '../interfaces/interfaces';

@Component({
  selector: 'app-liste',
  imports: [
    NgClass,
    UpperCasePipe
  ],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
  public films: Film[] = [
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      image: '/images/films/dark-knight.jpg'
    },
    {
      title: 'Interstellar',
      year: 2014,
      director: 'Christopher Nolan',
      image: '/images/films/interstellar.jpg'
    },
    {
      title: 'Fight Club',
      year: 1999,
      director: 'David Fincher',
      image: '/images/films/fight-club.jpg'
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      director: 'Quentin Tarantino',
      image: '/images/films/pulp-fiction.jpg'
    },
    {
      title: 'Blade Runner 2049',
      year: 2017,
      director: 'Denis Villeneuve',
      image: '/images/films/blade-runner.jpg'
    }
  ];

  public selectedFilm: Film | null = null;

  public selectFilm(film: Film) {
    this.selectedFilm = film;
  }
}
