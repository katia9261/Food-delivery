import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public greetMess!: string;
  public isHomePageViewable!: boolean;

  constructor() {

  }

  ngOnInit() {
    this.greetMess = 'Parent Component';
  }


}


