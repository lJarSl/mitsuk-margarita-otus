import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Word } from './word';
import { WORDS } from './mock-words';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VocabularService {

  //vocabular: Word[] = WORDS

  constructor(private messageService: MessageService) { }

  getWords(): Observable<Word[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(WORDS);
  }
}
