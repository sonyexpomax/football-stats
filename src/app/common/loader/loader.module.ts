import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [LoaderComponent],
  imports: [MaterialModule],
  exports: [LoaderComponent],
  providers: [],
})

export class LoaderModule { }
