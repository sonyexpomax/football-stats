import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionsComponent } from './competitions.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../common/loader/loader.module';

@NgModule({
  imports: [CommonModule, TranslateModule, MaterialModule, RouterModule, LoaderModule],
  declarations: [CompetitionsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})

export class CompetitionsModule {}
