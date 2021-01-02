import { Component, OnInit } from '@angular/core';
import {faFilm,faSearch} from '@fortawesome/free-solid-svg-icons';
import {MovieService} from '../service/movie.service';

export interface ISession{

  day: string,
  time: string
}

export interface IAdmin {
  city: string,
  address: string,
  cinemaName: string
}


export interface IMovie {
  movieId: number,
  title: string,
  duration: number,
  language: string,
  subtitle: string,
  director: string,
  actors: string,
  minAge:number,
  startDate:string,
  endDate:string,
  sessionList: Array<ISession>
  admin: IAdmin
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public faFilm = faFilm;
  public faSearch = faSearch;
  public movies = new Array<IMovie>();
  public city: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  public searchMovies(){
    if (this.city){
      this.city = this.city.trim().replace(' ', '_');
      this.movieService.getMoviesByCity(this.city).then(value => {
        this.city = '';
        this.movies = value['movies'];
      })
    }
  }


}
