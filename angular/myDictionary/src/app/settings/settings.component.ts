import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    onClickBack () {
        console.log('back');
    }
    onClickSave () {
        console.log('save');
    }

    constructor() { }

    ngOnInit() {
    }

}
