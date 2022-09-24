import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-search',
  templateUrl: './problem-search.component.html',
  styleUrls: ['./problem-search.component.css']
})
export class ProblemSearchComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = 'Такого продукту ми не маємо';
  @Input() resetLinkText = "Обрати щось інше";
  @Input() resetLinkRoute = "/";

  constructor() { }

  ngOnInit(): void {
  }

}
