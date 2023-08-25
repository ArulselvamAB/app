import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponentComponent } from './registrationcomponent/registrationcomponent.component';
import { LoginComponentComponent } from './logincomponent/logincomponent.component';

const routes: Routes = [
  {path: '', redirectTo:'/', pathMatch:'full'},
  {path: 'login', component: LoginComponentComponent},
  {path: 'register',component:RegistrationComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }