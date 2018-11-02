import { Component, OnInit } from '@angular/core';
import { Word } from '../word';


@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

    word: Word = {
        id: 1,
        name: 'test',
        translation: 'test',
        date: ''
      };

    checkingResult = ''

    onClick(value){
        value = value.trim();

        if(this.word.name === value){
            console.log('checking word - ' + value)
            this.checkingResult = 'true :)'
        } else {
            this.checkingResult = 'false :('
        }

    }

    constructor() { }

    ngOnInit() {
    }

}
