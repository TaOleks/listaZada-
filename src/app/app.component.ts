import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lessonsAngular';

  newTask: string;
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];


  add(): void {
    this.tasksList.push(this.newTask)
    this.newTask = '';
    console.log(this.tasksList)
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(it => it !== task)
  }

  done(task: string) {
    this.tasksDone.push(task)
    this.remove(task)
    console.log(this.tasksDone)
  }

}
