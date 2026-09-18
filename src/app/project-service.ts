import { Service } from '@angular/core';
import { Project } from './project';

@Service()
export class ProjectService {
    projectsObj: Project[] = [
      {
        name: 'Sakura',
        link: 'sakura.com',
        type: 'Website',
        duration: 3,
        languages: ['HTML', 'CSS'],
        finsihed: true,
        description: 'Dies ist eine Restaruantwebseite',
        id: 0,
      },
      {
        name: 'Blog',
        link: 'Blog.com',
        type: 'Website',
        duration: 5,
        languages: ['HTML', 'CSS'],
        finsihed: true,
        description: 'Dies ist ein Blog',
        id: 1,
      },
      {
        name: 'Portfolio',
        link: 'Portfolio.com',
        type: 'Website',
        duration: 10,
        languages: ['HTML', 'CSS', 'Typescript'],
        finsihed: false,
        description: 'Dies ist mein Portfolio',
        id: 2,
      }
    ]

    getDoneProjects(){
        const result = this.projectsObj.filter((project) => project.finsihed);
        return result.length;
    }

    returnProjects(){
        return this.projectsObj;
    }

    addProject(){

    }
}
