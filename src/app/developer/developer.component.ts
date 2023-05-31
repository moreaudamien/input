import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  developer: Developer = new Developer(
    'Damien',
    'Moreau',
    35,
    'male',
    'bio de moi',
    [
      { name: 'JS', logo: 'JSlogo', site: 'js.com' },
      { name: 'HTML', logo: 'HTMLlogo', site: 'HTML.com' },
    ]
  );
}
