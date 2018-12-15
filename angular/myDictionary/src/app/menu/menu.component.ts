import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
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
