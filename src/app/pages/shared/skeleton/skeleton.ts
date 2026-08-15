import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  imports: [],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.css',
})
export class Skeleton {

  width = input<string>('100%');  // New way of declaring @Input --> input()
  height = input<string>('16px');
  borderRadius = input<string>('6px');

}
