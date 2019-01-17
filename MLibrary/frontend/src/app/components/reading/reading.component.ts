import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from './../../services/book.service';

import { ServersResponseData } from './../../models/ServersResponseData.model';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

  @Input() bookText: String;

  bookId: String;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params['id'];
      this.getText();
    });
  }



  getText() {
    this.bookService
    .getTextByBookId(this.bookId)
    .subscribe((data: ServersResponseData) => { // Todo: use Observable RxJS
      console.log(data);
      this.bookText = data.text;
    });
  }


}
