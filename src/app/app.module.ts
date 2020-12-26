import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TeamsComponent } from './teams/teams.component';
import { LoaderComponent } from './common/loader/loader.component';
import { ScoresComponent } from './scores/scores.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { MatCardModule } from '@angular/material/card';
import { APP_INITIALIZER } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function initTranslation(translate: TranslateService) {
  return () => {
    translate.setDefaultLang('en');
    translate.use('en');
    return Promise.resolve();
  };
}

@NgModule({
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    TeamsComponent,
    CompetitionsComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    ScoresComponent,
    LoaderComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslation,
      deps: [TranslateService],
      multi: true
    },
  ],
})

export class AppModule { }
