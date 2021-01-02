import { Component, OnInit } from '@angular/core';
import {faHome,faPlusSquare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public faHome = faHome;
  public faPlusSquare = faPlusSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
