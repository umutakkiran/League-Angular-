import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  name:any;
  surname:any;
  height:any;
  weight:any;
  age: any;
  photo: any;
  teamId: any;
  allPlayers: any;
  Id: any;
  constructor(private requestService: RequestService){}

  ngOnInit() {
    this.getAllTeams();
    console.log(this.allPlayers)
  }

  async getAllTeams(){
    this.allPlayers = await this.requestService.get({controller: "Player"}).toPromise();
  }

  getIdFromUpdateBtn(id:string){
     this.Id = id;
  }

  getIdFromDeleteBtn(id:string){
    this.Id = id;
 }
}
