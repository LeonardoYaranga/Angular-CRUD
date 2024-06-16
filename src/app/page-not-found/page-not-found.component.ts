import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a routerLink="/">Go back to home</a>
  `,
  styles: [`
    h1 {
      font-size: 2em;
      color: red;
    }
    p {
      font-size: 1.2em;
    }
  `]
})
export class PageNotFoundComponent {

}
