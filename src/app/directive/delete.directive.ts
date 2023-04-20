import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { Game } from '../models/game';
import { NotificationService } from '../services/notification.service';

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef, private renderer: Renderer2, private requestService: RequestService, private notify: NotificationService, ) {

    const button = this.renderer.createElement('button');
    this.renderer.appendChild(button, this.renderer.createText('Sil'));
    this.renderer.addClass(button, 'bg-red-500');
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
          this.requestService.delete({controller: this.controller}, this.Id).subscribe((data) => {
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
            playerObject.Id = this.Id;
            this.requestService.delete({controller: this.controller}, this.Id).subscribe((data) => {
            this.successMessage();
            // Handle successful response
          }, (error) => {
            this.errorMessage();
            // Handle error
          });
            break;
            case "Game":
              console.log("burası Player controller");
              const gameObject: Game = new Game();
              gameObject.Id = this.Id;
              this.requestService.delete({controller: this.controller}, this.Id).subscribe((data) => {
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
