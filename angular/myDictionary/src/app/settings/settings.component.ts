import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    onClickBack(): void {
        console.log('back');
    }
    onClickSave(): void {
        console.log('save');
    }

    constructor() { }

    ngOnInit() {
    }

}
