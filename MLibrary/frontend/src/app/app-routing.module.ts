import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { ReadingComponent } from './components/reading/reading.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './auth.guard';

// import { UserRegisterComponent } from './components/user-register/user-register.component';
// import { UserEditComponent } from './components/user-edit/user-edit.component';
// import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'books/create', component: BookCreateComponent},
  {path: 'books/edit/:id', component: BookEditComponent},
  {path: 'reading/:id', component: ReadingComponent},
  {path: 'create-account', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'books', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
