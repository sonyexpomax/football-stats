import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { MaterialModule } from '../../material.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [LoaderComponent],
    imports: [MaterialModule, CommonModule],
  exports: [LoaderComponent],
  providers: [],
})

export class LoaderModule { }
