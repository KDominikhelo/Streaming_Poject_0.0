import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';

const routes: Routes = [


  { path: 'login', component: LoginpageComponent },
  { path: 'registration', component: RegistrationpageComponent },
  { path: 'mainpage', component: MainpageComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
