import { Injectable } from '@angular/core';

import { WORDS } from './mock-words';
import { Word } from './word';

@Injectable({
  providedIn: 'root'
})
export class VocabularService {

    vocabular: Word[] = WORDS

  constructor() { }
}
