import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  name: string = 'Igor';
  counter: number = 0;

  value: string = "";

  currentEditingSkillIndex: number | null = null;
  editingValue: string = "";

  skills: string[] = ["JavaScript", "HTML", "CSS", "Angular"];

  increment () {
    this.counter = this.counter + 1;
  }

  decrement () {
    this.counter = this.counter - 1;
  }

  addSkill (skill: string) {
    console.log(skill, "SKILL");
    this.skills.push(skill);
    this.value = "";
  }

  deleteSkill (skill: string) {
     
  }

  editSkill (index: number) {
    this.currentEditingSkillIndex = index;
  }

  onInputChange (event: any) {
    this.value = event.target.value;
  }

  onEditInputChange (event: any) {
    this.editingValue = event.target.value;
  }

  onSaveEdit () {
    if (this.editingValue) {
      this.skills[this.currentEditingSkillIndex!] = this.editingValue;
    }

    this.currentEditingSkillIndex = null;
    this.editingValue = "";
  }
  
}
