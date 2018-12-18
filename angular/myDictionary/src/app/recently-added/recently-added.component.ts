import { Component, OnInit } from '@angular/core';
import { VocabularService } from '../vocabular.service';
import { Word } from '../word';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {
    words: Word[]

  constructor(private vocabularService: VocabularService) { }

  ngOnInit() {
    this.getWords();
  }

  getWords(): void {
    let self = this;
    this.vocabularService
            .getWords()
            .subscribe(words => {
                this.words = words
            });
    }

}
