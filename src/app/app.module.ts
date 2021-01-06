import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { ScoresComponent } from './scores/scores.component';
import { CompetitionsModule } from './competitions/competitions.module';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { MatchComponent } from './match/match.component';

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
        LayoutModule,
        CompetitionsModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,

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
        TeamsComponent,
        MatchComponent,
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initTranslation,
            deps: [TranslateService],
            multi: true
        },
    ],
  exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class AppModule { }
