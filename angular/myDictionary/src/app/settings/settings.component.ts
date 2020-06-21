import { Component, OnInit } from '@angular/core';


import { Settings } from '../settings';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    settings: Settings

    onClickBack(): void {
        console.log('back');
    }
    onClickSave(): void {
        console.log('save');
    }
    
    triggerResize(){}

    constructor(private settingsService: SettingsService) { }

    ngOnInit() {
        this.getSettings()
    }

    getSettings(): void {
        this.settingsService
                .getSettings()
                .subscribe(data => {
                    this.settings = data
                });
    }

}
