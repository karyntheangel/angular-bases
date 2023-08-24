import { Component } from '@angular/core';
//import { Tooltip } from 'node_modules/bootstrap/dist/js/boostrap.esm.min.js'
declare const bootstrap:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bases';
  app="Angular"

  ngOnInit(){

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...Array.from(tooltipTriggerList)].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }

}

