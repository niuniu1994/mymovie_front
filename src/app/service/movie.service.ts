import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IMovie} from '../home';
import {baseUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  constructor(private http: HttpClient) { }

  public async getMoviesByCity(data): Promise<IMovie>{
    return await this.http.get<IMovie>(`${baseUrl}/resource/movies/${data}`).toPromise();
  }

  public async addMovie(data): Promise<any>{
    console.log(JSON.stringify(data));
    return await this.http.post(`${baseUrl}/admin/movie`, data, {headers: this.headers}).toPromise();
  }

  public async getMoviesOfAdmin():Promise<any>{
    return await this.http.get(`${baseUrl}/admin/movie`).toPromise();
  }
}
