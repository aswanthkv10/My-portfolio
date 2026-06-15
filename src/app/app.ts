import { Component } from '@angular/core';

import {Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Stats } from './components/stats/stats';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { ProblemSolving } from './components/problem-solving/problem-solving';
import { Contact } from './components/contact/contact';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
   Navbar,
    Hero,
    Stats,
    Skills,
    Experience,
    Projects,
    ProblemSolving,
    Contact,
    
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}