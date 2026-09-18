import { Component } from '@angular/core';
import { Projects } from './projects/projects';
import { Hero } from './hero/hero';

@Component({
  imports: [Projects, Hero],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {
 
}
