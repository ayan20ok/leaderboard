import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leader Board';
  playerDetails: any = [

    {
      id:"1",
      name:"Player 1",
      score:"100",
      imgsrc: "assets/player.jpg",
      desc:"This is the description of the player 1 about his performance."
    },
    {
      id:"2",
      name:"Player 2",
      score:"200",
      imgsrc: "assets/player.jpg",
      desc:"This is the description of the player 2 about his performance."
    },
    {
      id:"3",
      name:"Player 3",
      score:"300",
      imgsrc: "assets/player.jpg",
      desc:"This is the description of the player 3 about his performance."
    },
    {
      id:"4",
      name:"Player 4",
      score:"400",
      imgsrc: "assets/player.jpg",
      desc:"This is the description of the player 4 about his performance."
    },
    {
      id:"5",
      name:"Player 5",
      score:"500",
      imgsrc: "assets/player.jpg",
      desc:"This is the description of the player 5 about his performance."
    },
    {
      id:"6",
      name:"Player 6",
      score:"600",
      imgsrc: "assets/player.jpg",
      desc:"This is the description of the player 6 about his performance."
    }





  ]

  scoreChangedHandler(count: any) {
    this.playerDetails = count;

    for (let i = 0; i < this.playerDetails.length; i++) 
    {
      console.log("this.playerDetails" + this.playerDetails[i].score);
    }
    
  }

}
