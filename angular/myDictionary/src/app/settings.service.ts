import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SETTINGS } from './mock-settings';
import { Settings } from './settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getSettings(): Observable<Settings> {
    return of(SETTINGS);
  }
}
