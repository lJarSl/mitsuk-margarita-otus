import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { checkingStats } from '../checkingStats';


@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

    checkingResult: String = ''

    myAnswer: String = ''

    currentWord: Word = {
            id: 1,
            name: 'bear',
            translation: 'медведь',
            date: ''
        }

    checkingStats: checkingStats = {
        isCorrect: false,
        message: '',
        extras: {
                date: new Date(),
                comparedWords: []
            }
    };

    checkWord(): void {
        console.log('checking word - ' + this.myAnswer)
        this.checkingStats.extras.comparedWords = [this.myAnswer, this.currentWord.translation]
        if(this.myAnswer === this.currentWord.translation){
            this.checkingStats.isCorrect = true
            this.checkingStats.message = 'true :)'
        } else {
            this.checkingStats.isCorrect = false
            this.checkingStats.message = 'false :('
        }
        this.checkingResult = this.checkingStats.message
    }

    constructor() { }

    ngOnInit() {
    }

}
