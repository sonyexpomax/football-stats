
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  constructor() {}

  ngOnInit(): void {

  }
}
