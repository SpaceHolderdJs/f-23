import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit, DoCheck {
  name: string = 'Igor';
  counter: number = 0;

  value: string = '';
  searchValue: string = '';

  currentEditingSkillIndex: number | null = null;
  editingValue: string = '';

  skills: string[] = ['JavaScript', 'HTML', 'CSS', 'Angular'];

  todos: {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }[] = [];

  todosSearchResults: typeof this.todos = [];

  // initing of the component (first render)
  ngOnInit() {
    console.log('Hello from counter');

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.todos = json;

        const localStorageSearchValue: string =
          localStorage.getItem('searchValue') || '';
        this.searchValue = localStorageSearchValue;

        this.filterTodos();
      });
  }

  // tracking data updates of component
  ngDoCheck() {
    console.log('Component has been updated');
    console.log(this.todos, 'TODOS');

    // this.todos = this.todos.slice(0, 100);
  }

  onSearchInputChange(event: any) {
    console.log(event.target.value);
    this.searchValue = event.target.value;
    localStorage.setItem('searchValue', this.searchValue);
    this.filterTodos();
  }

  filterTodos() {
    this.todosSearchResults = this.todos.filter(({ title }) =>
      title.includes(this.searchValue)
    );
  }

  increment() {
    this.counter = this.counter + 1;
  }

  decrement() {
    this.counter = this.counter - 1;
  }

  addSkill(skill: string) {
    console.log(skill, 'SKILL');
    this.skills.push(skill);
    this.value = '';
  }

  deleteSkill(skill: string) {}

  editSkill(index: number) {
    this.currentEditingSkillIndex = index;
  }

  onInputChange(event: any) {
    this.value = event.target.value;
  }

  onEditInputChange(event: any) {
    this.editingValue = event.target.value;
  }

  onSaveEdit() {
    if (this.editingValue) {
      this.skills[this.currentEditingSkillIndex!] = this.editingValue;
    }

    this.currentEditingSkillIndex = null;
    this.editingValue = '';
  }
}
