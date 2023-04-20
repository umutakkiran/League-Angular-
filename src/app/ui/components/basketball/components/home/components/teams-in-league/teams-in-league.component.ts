import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-teams-in-league',
  templateUrl: './teams-in-league.component.html',
  styleUrls: ['./teams-in-league.component.scss']
})
export class TeamsInLeagueComponent {

  allTeams: any;
  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.getAllTeams();
  }

   async getAllTeams(){
    this.allTeams = await this.requestService.get({controller:"Team"}).toPromise();
    console.log(this.allTeams);
  }

  leftScroll() {
    var eldiv = document.getElementById("teams") as HTMLDivElement;
    eldiv.style.transform += "translateX(-250px)";
  }

  rightScroll() {
    var eldiv = document.getElementById("teams") as HTMLDivElement;
    eldiv.style.transform += "translateX(250px)";
  }

}
