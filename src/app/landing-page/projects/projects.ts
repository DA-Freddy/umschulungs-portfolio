import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../project-service';

@Component({
  imports: [RouterLink],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  firstName: string = "Freddy";
  projects : string[]= ['Sakura', 'Blog', 'Fotogram', 'Portfolio'];
  
  projectService = inject(ProjectService);
}
