import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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

    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) {
        console.log(route);
    }

    ngOnInit() {
        console.log(location.pathname);
        
    }

}
