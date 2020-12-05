import { Component, OnInit } from '@angular/core';
import {faFilm,faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public faFilm = faFilm;
  public faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
