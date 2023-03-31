import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './backend/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'home',     component:HomeComponent,canActivate: [AuthGuard]},
  //{ path: '**', redirectTo: '' }
  
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
