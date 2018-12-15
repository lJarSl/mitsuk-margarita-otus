import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StudyComponent } from './study/study.component';
import { SettingsComponent } from './settings/settings.component';
import { VocabularComponent } from './vocabular/vocabular.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { AddNewComponent } from './add-new/add-new.component';
import { VocabularService } from './vocabular.service';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StudyComponent,
    SettingsComponent,
    VocabularComponent,
    RecentlyAddedComponent,
    AddNewComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{provide:'vocabular', useClass: VocabularService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
