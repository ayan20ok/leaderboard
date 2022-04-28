import { ArrayType } from '@angular/compiler';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./app.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() sPlist: any[] = [];
  uScore: string = "";
  
  @Output() nPlayerArr: EventEmitter<any> =   new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onInpuText(event:any){
    //console.log("this is inuputtext" + event.target.value);

    this.uScore = event.target.value;
    

  }

  onGetInput(num:any){

    //console.log("this.textValue--1" + this.sPlist);

    for (let i = 0; i < this.sPlist.length; i++) {


      //console.log ("Block statement execution no." + this.sPlist[i].id);
        if (this.sPlist[i].id == num )
        {

          //console.log("this.sPlist[i].score" + this.sPlist[i].score)

          this.sPlist[i].score = this.uScore
        }

        console.log("this.textValue--2" +  this.sPlist[i].score);
    }
    
    this.nPlayerArr.emit(this.sPlist);
  }
  
 
}
