import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <nav>
      <div *ngFor="let item of list"><a routerLink="{{item.link}}">{{item.title}}</a></div>
    </nav>
  `,
  styles: [
      'nav {text-align: center}',
      'div {display: inline-block; margin: 0 20px}',
      'div a {color: #000; text-decoration: none; border-bottom: 1px solid #000}'
  ]
})
export class MenuComponent implements OnInit {
    list = [
        { link: '/settings', title: 'Settings' },
        { link: '/study', title: 'Go'},
        { link: '/recently-added', title: 'Recently Added'}
    ]

    constructor() { }

    ngOnInit() {
    }

}
