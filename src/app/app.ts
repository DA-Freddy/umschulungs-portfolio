import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { LandingPage } from './landing-page/landing-page';
import { Imprint } from './imprint/imprint';

@Component({
  imports: [Header, LandingPage, Imprint, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('umschulungs-portfolio');
}
