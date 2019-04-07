import { Project } from 'src/app/models/project';
import { ProjectsDataService } from './../../services/projects-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sc-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectsData: ProjectsDataService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get("id");
      this.getProject();
    })
  }

  getProject(): void {
    this.projectsData.getProject(this.projectId).subscribe((project) => {
      this.project = project;
    })
  }
}
