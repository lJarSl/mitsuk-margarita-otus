import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    currentPath: String

    list = [
        { link: '/settings', title: 'Settings' },
        { link: '/study', title: 'Go'},
        { link: '/recently-added', title: 'Recently Added'}
    ]

    constructor(
        private location: Location
    ) {}

    onSelect(path): void {
        this.currentPath = path
    }

    ngOnInit() {
        this.currentPath = location.pathname
    }

}
