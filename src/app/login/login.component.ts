import {Component, OnInit} from '@angular/core';
import {faUser, faKey} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public faUser = faUser;
  public faKey = faKey;
  public formGroup: FormGroup;
  public alert: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  public async submit() {
    if (this.formGroup.valid) {
      await this.authService.authentication(JSON.stringify(this.formGroup.value)).then(value => {
        let errorCode:number = value['errorCode']

        if (errorCode == 0) {
          sessionStorage.setItem('token',value['data']['token']);
          this.router.navigateByUrl('admin');
        } else if (errorCode == -4) {
          this.alert = 'Username or password incorrect';
        } else if (errorCode == -3) {
          this.alert = 'Username and password can not be empty';
        }
      });
    }else {
      this.alert = 'Username and password can not be empty';
    }


  }
}
