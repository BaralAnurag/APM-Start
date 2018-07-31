import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
  <div><h1>{{pageTitle}}</h1>
    <div> My first Component </div>
    <div *ngFor="let item of myArray"> {{ item }} </div>
    </div>`
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
