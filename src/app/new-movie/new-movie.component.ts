import {Component, OnInit} from '@angular/core';
import {
  faHome,
  faPlusSquare,
  faFilm,
  faLanguage,
  faUserAstronaut,
  faUserNinja,
  faTimesCircle,
  faClock,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import {DateRange, ExtractDateTypeFromSelection, MatDatepicker, MatDatepickerInputEvent} from '@angular/material/datepicker';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ISession} from '../home';
import {MovieService} from '../service/movie.service';
import {DateAdapter} from '@angular/material/core';
import {DatePipe} from '@angular/common';
import {D} from '@angular/cdk/keycodes';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
  providers: [DatePipe]
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
  public movieGroup: FormGroup;

  public alert = false;
  public alert1 = false;
  public alert2 = false;
  startDate: any;
  endDate: any;


  constructor(private fb: FormBuilder, private movieService: MovieService, private datePipe: DatePipe, private router: Router) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.movieGroup = this.fb.group({
      title: ['', Validators.required],
      duration: ['', Validators.required],
      language: ['', Validators.required],
      subtitle: ['', Validators.required],
      director: ['', Validators.required],
      actors: ['', Validators.required],
      minAge: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      sessionList: this.fb.array([
        this.createSession()
      ])

    });
  }

  get sessionList() {
    return this.movieGroup.get('sessionList') as FormArray;
  }


  private addSession(): void {
    this.sessionList.push(this.createSession());
  }

  private createSession(): FormGroup {
    return this.fb.group({
      day: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  public deleteAlert(): void {
    this.alert = false;
  }

  public startDateChange($event: MatDatepickerInputEvent<any>) {
    let sd = $event.value;
    this.startDate = this.datePipe.transform(sd, 'yyyy-MM-dd');
    console.log(this.startDate + '--------');
    console.log(this.movieGroup.get('startDate'));
  }

  public endDateChange($event: MatDatepickerInputEvent<any>) {
    let ed = $event.value;
    this.endDate = this.datePipe.transform(ed, 'yyyy-MM-dd');
  }

  public submit(): void {
    if (this.movieGroup.valid) {
      this.movieService.addMovie(this.movieGroup.value).then(value => {
        let errorCode: number = value['errorCode'];
        if (errorCode == 0) {
          this.alert1 = true;
          this.movieGroup.reset();
        } else {
          this.alert2 = true;
        }
      });
    } else {
      this.alert = true;
    }
  }


}
