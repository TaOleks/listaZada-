import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lessonsAngular';


  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];
ngOnInit(): void {
this.tasksList = ['spzątanie ', 'zakupy', 'nauka Angular','jazda rowerem']
}

  add(task:string): void {
    this.tasksList.push(task)
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
