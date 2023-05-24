import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  data: number[] = [100, 105, 90];

  isCounterAval: boolean = false;

  // obj = {
  //   name: "Igor",
  //   age: 23
  // };

  func () {
    //@ts-ignore
    console.log("Works from APP!!!!!!!", this);
  }

  onChangeCounterAval () {
    this.isCounterAval = !this.isCounterAval;
    console.log("Works");
  }

  addRandomData () {
    this.data.push(Math.floor(Math.random() * 150));
  }
}
