import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  constructor(private http: HttpClient) {
  }

  public async authentication(data): Promise<any> {
    return await this.http.post(`${baseUrl}/admin/login`, data, {headers: this.headers}).toPromise();
  }

  public loggedIn(): boolean{
    return !!sessionStorage.getItem('token');
  }

  public getToken():string{
    return sessionStorage.getItem('token');
  }

}
