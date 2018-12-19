import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { NgForm } from '@angular/forms';
import { checkingStats } from '../checkingStats';
import { VocabularService } from '../vocabular.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

    checkingResult: String = ''

    myAnswer: String = ''

    currentWord: Word

    checkingStats: checkingStats = {
        isCorrect: false,
        message: '',
        extras: {
                date: new Date(),
                comparedWords: []
            }
    };

    constructor(private vocabularService: VocabularService) { }

    ngOnInit() {
        this.getWords();
    }


    checkAnswer(form: NgForm): void {
        if (form.invalid) {
          return;
        }
        this.myAnswer = form.value.myAnswer
        console.log('checking word - ' + this.myAnswer)
        this.checkingStats.extras.comparedWords = [this.myAnswer, this.currentWord.translation]
        if (this.myAnswer === this.currentWord.translation) {
            this.checkingStats.isCorrect = true
            this.checkingStats.message = 'true :)'
        } else {
            this.checkingStats.isCorrect = false
            this.checkingStats.message = 'false :('
        }
        this.checkingResult = this.checkingStats.message
    }

    getWords(): void {
        this.vocabularService
                .getWords()
                .subscribe(words => {
                    this.currentWord = words[2]
                });
    }

}
