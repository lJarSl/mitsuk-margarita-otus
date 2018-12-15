import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { checkingStats } from '../checkingStats';


@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

    myAnswer: ''

    word: Word = {
        id: 1,
        name: 'test',
        translation: 'test',
        date: ''
      }

    checkingStats: checkingStats = {
    isCorrect: false,
    message: 'true :)',
    extras: {
        date: new Date(),
        comparedWords: []
        }
    };

    checkingResult = ''

    checkWord(){
        let value = this.myAnswer.trim();
        console.log('checking word - ' + value)
        if(this.word.name === value){
            this.checkingResult = 'true :)'
        } else {
            this.checkingResult = 'false :('
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
