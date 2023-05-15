import { Component } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-klikacz1',
  templateUrl: './klikacz1.component.html',
  styleUrls: ['./klikacz1.component.css']
})
export class Klikacz1Component {
click = 0;

constructor(private clickService:ClickService){

}

add():void{
  this.click +=1;
  this.clickService.addClicks()
}

}
