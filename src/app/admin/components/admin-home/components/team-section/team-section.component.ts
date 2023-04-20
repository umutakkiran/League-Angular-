import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.scss']
})
export class TeamSectionComponent {

  name:any;
  logo:any;
  allTeams: any;
  Id: any;
  constructor(private requestService: RequestService){}

  ngOnInit() {
    this.getAllTeams();
  }

  async getAllTeams(){
    this.allTeams = await this.requestService.get({controller: "Team"}).toPromise();
  }

  getIdFromUpdateBtn(id:string){
     this.Id = id;
  }
  
}
