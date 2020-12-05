import { Component, OnInit } from '@angular/core';
import {faHome,faPlusSquare,faFilm,faLanguage,faUserAstronaut,faUserNinja,faTimesCircle,faClock,faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  public faHome = faHome;
  public faPlusSquare = faPlusSquare;
  public faFilm = faFilm;
  public faLanguage = faLanguage;
  public faUserAstronaut = faUserAstronaut;
  public faUserNinja = faUserNinja;
  public faTime = faTimesCircle;
  public faClock = faClock;
  public faExclamation = faExclamationCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
