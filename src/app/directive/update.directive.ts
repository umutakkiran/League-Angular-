import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Team } from '../models/team';
import { RequestService } from '../services/request.service';
import { Player } from '../models/player';
import { Game } from '../models/game';
import { NotificationService } from '../services/notification.service';

@Directive({
  selector: '[appUpdate]'
})
export class UpdateDirective {

  constructor(private element: ElementRef, private renderer: Renderer2, private requestService: RequestService, private notify: NotificationService, ) {

    const button = this.renderer.createElement('button');
    this.renderer.appendChild(button, this.renderer.createText('Güncelle'));
    this.renderer.addClass(button, 'bg-yellow-500');
    this.renderer.addClass(button, 'rounded-lg');
    this.renderer.addClass(button, 'text-white');


    button.style.width = "75px";
    button.style.height = "50px";


    this.element.nativeElement.style.width = "50px";
    this.element.nativeElement.style.height = "50px";

    renderer.appendChild(element.nativeElement, button)
   }

   @Input() controller: string;
   @Input() Id: string;

//team modeli için
  @Input() name: string;
  @Input() logo: string;
 
//player modeli için
@Input() surname: string;
@Input() height: string;
@Input() weight: string;
@Input() age: string;
@Input() photo: string;
@Input() teamId: string;

//game modeli için
@Input() weekId: string;
@Input() homeTeamId: string;
@Input() awayTeamId: string;
@Input() stadium: string;
@Input() dateGame: string;
@Input() homeTeamScore: string;
@Input() awayTeamScore: string;

successMessage(){
  this.notify.showSuccess();
}

errorMessage(){
  this.notify.showError();
}



  @HostListener('click')
  onclick(){
    
    switch (this.controller) {
      
      case "Team":
          console.log("burası Team controller");
          const teamObject: Team = new Team();
          teamObject.Id = this.Id;
          teamObject.name = this.name;
          teamObject.logo = this.logo;
          this.requestService.put({controller: this.controller}, teamObject).subscribe((data) => {
            this.successMessage();
            // Handle successful response
          }, (error) => {
            this.errorMessage();
            // Handle error
          });
          break;
          case "Player":
            console.log("burası Player controller");
            const playerObject: Player = new Player();
            playerObject.Id = this.Id
            playerObject.Name = this.name;
            playerObject.Surname = this.surname;
            playerObject.height = this.height;
            playerObject.weight = this.weight;
            playerObject.age = this.age;
            playerObject.photo = this.photo;
            playerObject.TeamId = this.teamId;
            this.requestService.put({controller: this.controller}, playerObject).subscribe((data) => {
            this.successMessage();
            // Handle successful response
          }, (error) => {
            this.errorMessage();
            // Handle error
          });
            break;
            case "Game":
              console.log("burası Game controller");
              const gameObject: Game = new Game();
              gameObject.Id = this.Id
              gameObject.weekId = this.weekId;
              gameObject.homeTeamId = this.homeTeamId;
              gameObject.awayTeamId = this.awayTeamId;
              gameObject.date = new Date("2023-04-06T09:09:34.008Z")  ;
              gameObject.stadium = this.stadium;
              gameObject.homeTeamScore = this.homeTeamScore;
              gameObject.awayTeamScore = this.awayTeamScore;
              this.requestService.put({controller: this.controller}, gameObject).subscribe((data) => {
            this.successMessage();
            // Handle successful response
          }, (error) => {
            this.errorMessage();
            // Handle error
          });
              break;
      default:
          console.log("Güncelleme işlemi controller bilgisi olmadığından gerçekleşemedi.");
          break;
  };
}
}
