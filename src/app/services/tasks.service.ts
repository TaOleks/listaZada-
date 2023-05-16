import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../models/tasks";

@Injectable()
export class TasksService {


  private tasksList: Array<Task> = [];
  private tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([])

  constructor() {
    this.tasksList = [
      {
        name: 'spszątanie',
        created: new Date()
      },
      {
        name: 'zakupy',
        created: new Date()
      },
      {
        name: 'nauka Angular',
        created: new Date()
      },
      {
        name: 'jazda rowerem',
        created: new Date()
      }
    ]

    this.tasksListObs.next(this.tasksList)
  }

  add(task: Task): void {
    this.tasksList.push(task)
    this.tasksListObs.next(this.tasksList)
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(it => it !== task);
    this.tasksListObs.next(this.tasksList)
  }

  done(task: Task) {
    this.tasksDone.push(task)
    this.remove(task)
    this.tasksDoneObs.next(this.tasksDone)
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable()
  }


  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable()
  }

}
