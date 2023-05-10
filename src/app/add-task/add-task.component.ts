import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTask:string;

@Output()
emmitTask = new EventEmitter<string>();

  add(){
this.emmitTask.emit(this.newTask);
this.newTask = ''
  }
}
