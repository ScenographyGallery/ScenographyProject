import { Project } from 'src/app/models/project';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) {}

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}projects/${id}`);
  }
}
