import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
    console.log(translate);
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    console.log(this.translate);
  }
}
