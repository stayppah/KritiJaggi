import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common'; 



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
})
export class ProjectsComponent {
  projects = [
    { name: 'News generator', image: 'assets/projectexample.png', description: 'Description of Project 1', flipped: false },
    { name: 'Job Search Web Application', image: 'assets/projectexample.png', description: 'Description of Project 2', flipped: false },
    { name: 'Song Identification', image: 'assets/projectexample.png', description: 'Description of Project 3', flipped: false },
    { name: 'Tweet Event detection', image: 'assets/projectexample.png', description: 'Description of Project 4', flipped: false },
    { name: 'Tennis Data analysis', image: 'assets/projectexample.png', description: 'Description of Project 5', flipped: false }
    
  ];

  

  flipCard(project: any) {
    project.flipped = !project.flipped;
  }

}
