import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-loader',
  imports: [],
  templateUrl: './progress-loader.html',
  styleUrl: './progress-loader.css',
})
export class ProgressLoader {

  message = input<string>('Processing...');

}
