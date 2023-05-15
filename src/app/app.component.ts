import { Component, OnInit } from '@angular/core';
import { ClickService } from './services/click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'klikacz_testowy';
  allClicks:number=0;

  constructor(private clickService:ClickService){}

 ngOnInit(): void {
  this.clickService.getSum().subscribe (clicks =>{
    this.allClicks = clicks
  })
  }
}

