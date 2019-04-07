import { Project } from './project';

export interface Artist {
  firstName: string;
  lastName?: string;
  cover?: string;
  id?: string;
  description?: string;
  tags?: string[];
  projects?: Project[];
  avatar?: string;
  specialization: string;
}