import { Component } from '@angular/core';
import { faUndoAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faUndoAlt = faUndoAlt;
  faAngleDown = faAngleDown;
}
