import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() username : string;
  public submit : boolean;
  public fruits = ['Orange', 'Strawberry', 'Logan', 'Apple', 'Rambutan']

  constructor() {
    this.username = '';
    this.submit = false;
  }

  setUsername(value: string): void {
    this.username = value;
    this.submit = true;
  }

  ngOnInit(): void {
  }

}
