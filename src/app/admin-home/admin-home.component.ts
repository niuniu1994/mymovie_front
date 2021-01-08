import { Component, OnInit } from '@angular/core';
import {IMovie,ISession} from '../home';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {MovieService} from '../service/movie.service';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  public movies: IMovie;
  public faFilm = faFilm;
  public alert = false;
  constructor(private movieService:MovieService, private  authService: AuthService) { }

  ngOnInit(): void {
    this.init()
  }

  private init(){
    this.movieService.getMoviesOfAdmin().then(value => {
      let errorCode: number = value['errorCode'];
      if (errorCode==0){
        this.movies = value['data']['movies'];
      }else {
        this.alert = true;
      }
    })
  }

  public deleteAlert(): void {
    this.alert = false;
  }
}
