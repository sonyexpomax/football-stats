import {Component, Input} from '@angular/core';

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent {
  @Input() full?: boolean;
}
