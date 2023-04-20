import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  weekId: string;
  homeTeamId: string;
  awayTeamId: string;
  stadium: string;
  dateGame: Date;
  homeTeamScore: string;
  awayTeamScore: string;
  allGames: any;
  Id: any;
  constructor(private requestService: RequestService){}

  ngOnInit() {
    this.getAllGames();
    console.log(this.allGames)
  }

  async getAllGames(){
    this.allGames = await this.requestService.get({controller: "Game"}).toPromise();
  }

  getIdFromUpdateBtn(id:string){
     this.Id = id;
  }

  
  getIdFromDeleteBtn(id:string){
    this.Id = id;
 }

}
