import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScoresComponent} from './scores.component';
import {LoaderModule} from '../common/loader/loader.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [ScoresComponent],
  imports: [
    CommonModule,
    LoaderModule,
    RouterModule,
    MaterialModule,
    TranslateModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class ScoresModule { }
