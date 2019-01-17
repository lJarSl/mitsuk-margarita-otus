import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * routing
 */
import { AppRoutingModule } from './app-routing.module';

/**
 * reactive forms
 */
import { ReactiveFormsModule } from '@angular/forms';

/**
 * http client
 */
import { HttpClientModule } from '@angular/common/http';

/**
 * material
 */
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';

/**
 * components
 */
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { BookCreateComponent } from './components/book-create/book-create.component';

/**
 * services
 */
import { BookService } from './services/book.service';
import { UserService } from './services/user.service';
import { ReadingComponent } from './components/reading/reading.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookEditComponent,
    UserRegisterComponent,
    UserEditComponent,
    UserLoginComponent,
    BookCreateComponent,
    ReadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    BookService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
