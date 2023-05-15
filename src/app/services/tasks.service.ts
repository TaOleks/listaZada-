import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TasksService{


 private tasksList: Array<string> = [];
 private tasksDone: Array<string> = [];

 private tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
 private tasksDoneObs = new BehaviorSubject<Array<string>>(this.tasksDone)

constructor() {
this.tasksList = ['spzątanie ', 'zakupy', 'nauka Angular','jazda rowerem'];
this.tasksListObs.next(this.tasksList)
}

  add(task:string): void {
    this.tasksList.push(task)
    this.tasksListObs.next(this.tasksList)
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(it => it !== task);
    this.tasksListObs.next(this.tasksList)
  }

  done(task: string) {
    this.tasksDone.push(task)
    this.remove(task)
    this.tasksDoneObs.next(this.tasksDone)
  }

  getTasksListObs(): Observable<Array<string>>{
    return this.tasksListObs.asObservable()
  }


  getTasksDoneObs(): Observable<Array<string>>{
    return this.tasksDoneObs.asObservable()
  }

}
