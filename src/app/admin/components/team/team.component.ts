import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

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

  getIdFromDeleteBtn(id:string){
    this.Id = id;
 }
}
