import { Component } from '@angular/core';

@Component({
  selector: 'gk-root',
  template: `
    <div class="app-container">
      <div class="app-content">
        <gk-menu></gk-menu>
        <div class="container">
          <div class="content">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gk';
}
