import { Component } from '@angular/core';

import {
  PoLinkModule,
  PoInfoModule
} from '@po-ui/ng-components';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PoLinkModule, PoInfoModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
