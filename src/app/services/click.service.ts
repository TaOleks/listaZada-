import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class ClickService {
private sumClicks = 0;
private sum = new Subject<number>()

  constructor() { }

addClicks(){
  this.sumClicks +=1;
  this.sum.next(this.sumClicks)
  console.log('Suma:')
  console.log(this.sumClicks)
}

getSum():Observable<number>{
return this.sum.asObservable()
}


}
