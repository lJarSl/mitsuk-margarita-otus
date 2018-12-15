import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent }   from './settings/settings.component';
import { StudyComponent }   from './study/study.component';
import { RecentlyAddedComponent }   from './recently-added/recently-added.component';
import { AddNewComponent }   from './add-new/add-new.component';

const routes: Routes = [
    { path: '', redirectTo: '/study', pathMatch: 'full' },
    { path: 'settings', component: SettingsComponent },
    { path: 'study', component: StudyComponent },
    { path: 'recently-added', component: RecentlyAddedComponent },
    { path: 'add-new', component: AddNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
