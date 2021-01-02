import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FootbarComponent} from './footbar/footbar.component';
import {HomeComponent} from './home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LoginComponent} from './login/login.component';
import {NewMovieComponent} from './new-movie/new-movie.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './service/auth.service';
import {AuthGuard} from './guard/auth.guard';
import {TokenInterceptorService} from './service/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootbarComponent,
    HomeComponent,
    LoginComponent,
    NewMovieComponent,
    AdminHomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
