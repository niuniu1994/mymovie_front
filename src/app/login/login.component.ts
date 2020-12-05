import { Component, OnInit } from '@angular/core';
import {faUser,faKey} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faUser = faUser;
  public faKey = faKey;
  constructor() { }

  ngOnInit(): void {
  }

}
