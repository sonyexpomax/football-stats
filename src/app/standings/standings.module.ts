import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderModule } from '../common/loader/loader.module';
import { StandingsComponent } from './standings.component';

@NgModule({
  declarations: [StandingsComponent],
  imports: [
    CommonModule,
    LoaderModule,
    RouterModule,
    MaterialModule,
    TranslateModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class StandingsModule { }
