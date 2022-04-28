import { Component, Output, EventEmitter, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./app.component.css']
})
export class PlayerComponent implements OnInit {


  @Input() chkVis:boolean = true;

  @Input() pimg:string = "";
  @Input() pdesc:string = "";

  @Output() popVal: EventEmitter<any> =   new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onHidePop()
 {
 
  
   this.chkVis = true;
   this.popVal.emit(this.chkVis);
 }

}
