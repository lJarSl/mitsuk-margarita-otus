import { Component } from '@angular/core';
import { VocabularService }  from './vocabular.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myDictionary';

  constructor (private vocabular: VocabularService) {
      console.log(vocabular);

  }
}
