import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionsComponent } from './competitions.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CompetitionsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})

export class CompetitionsModule {}