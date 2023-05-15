import { Component } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.css']
})
export class Klikacz2Component {

  click = 0;
constructor(private clickService:ClickService){}
  add():void{
    this.click +=1;
    this.clickService.addClicks()
  }
}
