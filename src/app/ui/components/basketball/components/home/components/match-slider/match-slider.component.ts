import { Component } from '@angular/core';
import { Game } from 'src/app/models/game';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-match-slider',
  templateUrl: './match-slider.component.html',
  styleUrls: ['./match-slider.component.scss']
})
export class MatchSliderComponent {

  allGames: Game[] | any;
  teamIds:any;
  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.getAllGames();
  }

  async getAllGames(){
    this.allGames = await this.requestService.get({controller:"Game"}).toPromise();
    console.log(this.allGames)

  }
   
  leftScroll() {
    var eldiv = document.getElementById("matches") as HTMLDivElement;
    eldiv.style.transform += "translateX(-250px)";
  }

  rightScroll() {
    var eldiv = document.getElementById("matches") as HTMLDivElement;
    eldiv.style.transform += "translateX(250px)";
  }
}
