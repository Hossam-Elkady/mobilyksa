import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'mobilyKsa';
    showWhatsapp: boolean = false;

    ngOnInit() {
        fromEvent(window, 'scroll').subscribe(() => {
            this.showWhatsapp = window.scrollY > 50;
        })
    }
}
