import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {NewMovieComponent} from './new-movie';
import {AuthGuard} from './guard/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminHomeComponent, canActivate:[AuthGuard]},
  {path: 'admin/movie', component: NewMovieComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
