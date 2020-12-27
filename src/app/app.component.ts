import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, RoutesRecognized } from '@angular/router';

export enum Layouts {
  Main,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Layouts = Layouts;
  layout: Layouts;
  title = 'Tour of Heroes';

  constructor(
    private router: Router,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    console.log(this.translate);
  }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.layout = data.state.root.firstChild.data.layout;
      }
    });
  }
}
