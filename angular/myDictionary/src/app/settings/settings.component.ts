import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    answerTime: number = 30

    countWords: number = 10

    language: string = 'de'

    onClickBack(): void {
        console.log('back');
    }
    onClickSave(): void {
        console.log('save');
    }
    
    triggerResize(){}

    constructor() { }

    ngOnInit() {
    }

}
