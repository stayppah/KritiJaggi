import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone:true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule]
})
export class AboutComponent {
  name = 'Kriti Jaggi';
  motto = 'Eager to code; Looking to grow; Motivated to succeed ';
  intro= "Greetings and welcome to my corner of the digital realm! I'm Kriti, a recent data science graduate with a passion for innovation, storytelling and beautiful experiences. Full of pluck and hungry for more, everyday I learn and explore.\n  I spent my childhood teaching myself a variety of skills like baking, painting, magic, a variety of sports. Little did I know I was actually busy preparing myself for my future in the ever-changing career of the tech world. Being a Jill of trades, has equipped me with the ability to successfully teach myself new skills with little to no guidance and keep myself updated in with new skills.  My journey into data science was born out of a desire to leverage analytical thinking to unlock solutions and insights. I firmly believe that logic and creativity are two sides of the same coin, which shows in my approach. The thrill of finding trends in data is matched only by the joy of communicating meaningful narratives through visualizations. When I'm not stuck with my head in my laptop , you can find me trailing along the UK coastline, baking cupcakes, or hunting for the next new hobby. I seek balance in all things - data and design, logic and art. I am thrilled by the idea of combining analytics with aesthetics to build smarter, more intuitive experiences. Though my path is unfolding, I am energized by new challenges and opportunities to learn. Please don't hesitate to reach out! I would love to chat.";

  skills = [
    'Angular', 'TypeScript', 'HTML', 'CSS', 
    'JavaScript', 'RxJS', 'Node.js' 
  ];

  bio = "Enthusiastic Angular developer with a passion for responsive web design and a drive to build robust, scalable web applications.";
  
  interests = [
    'Coding', 'Reading', 'Hiking', 'Music'
  ];
}
