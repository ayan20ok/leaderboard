import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./app.component.css']
})
export class DashboardComponent implements OnInit {

  showDetail: boolean = true;

  @Input() dPlist: any[] = [];
  playerImg:string =""
  playerDesc:string =""
  

  constructor() { }

  ngOnInit(): void {
  }

 onShowPop(data:any)
 {
   console.log(data.score)
   this.playerImg = data.imgsrc;
   this.playerDesc = data.desc;
   this.showDetail = false;
 }

 onPopChange(data:any){

  this.showDetail = data;
 }

}
