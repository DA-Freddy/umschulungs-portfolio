import { Component, inject } from '@angular/core';
import { ProjectService } from '../../project-service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  myName :string = "Freddy";
  searchingForJob : boolean = true;
  projectService = inject(ProjectService);
}
