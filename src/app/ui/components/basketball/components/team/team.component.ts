import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  specifiicTeam:any;
  players:any;
  id: any;
  constructor(private requestService: RequestService, private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getTeamInfo(this.id);
    this.getPlayersInfo(this.id);
    console.log(this.players);

  }

   async getTeamInfo(id: string){

    this.specifiicTeam = await this.requestService.get({controller: "Team"}, id).toPromise();
    console.log(this.specifiicTeam, this.id);
  }

  async getPlayersInfo(id: string){

    this.players = await this.requestService.get({controller: "Player", action:"GetPlayersByTeam"}, id).toPromise();
  }
 
}
