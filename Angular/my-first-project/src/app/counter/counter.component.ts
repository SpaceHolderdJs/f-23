import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  name: string = 'Igor';
  counter: number = 0;

  skills: string[] = ["JavaScript", "HTML", "CSS", "Angular"];

  increment () {
    this.counter = this.counter + 1;
  }

  decrement () {
    this.counter = this.counter - 1;
  }

  addSkill (skill: string) {
    this.skills.push(skill);
  }

  deleteSkill (skill: string) {
     
  }

  
}
