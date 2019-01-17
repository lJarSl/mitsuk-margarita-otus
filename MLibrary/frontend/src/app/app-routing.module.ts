import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { ReadingComponent } from './components/reading/reading.component';

// import { UserRegisterComponent } from './components/user-register/user-register.component';
// import { UserEditComponent } from './components/user-edit/user-edit.component';
// import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'books/create', component: BookCreateComponent},
  {path: 'books/edit/:id', component: BookEditComponent},
  {path: 'reading/:id', component: ReadingComponent},
  // {path: 'user/registration', component: UserRegisterComponent},
  // {path: 'user/login', component: UserLoginComponent},
  // {path: 'user/edit', component: UserEditComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
