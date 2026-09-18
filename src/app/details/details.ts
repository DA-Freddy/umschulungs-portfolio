import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project-service';

@Component({
  imports: [],
  selector: 'app-details',
  styleUrl: './details.scss',
  templateUrl: './details.html',
})
export class Details {
  projectService = inject(ProjectService);

  projectId = 0;
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.projectId = params['id'];
      console.log(this.projectId);
    });
  }
}
