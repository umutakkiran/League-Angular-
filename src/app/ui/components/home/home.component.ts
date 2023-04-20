import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit() {
    var element = document.getElementById("entrancePage") as HTMLDivElement;
    var elementText = document.getElementById("entrancePageText") as HTMLParagraphElement;
    var elementIcon = document.getElementById("entrancePageIcon") as HTMLImageElement;


    setTimeout(function(){
      
      elementText.style.transform = "translateX(-100px)"
      elementIcon.style.opacity = "1"
    }, 1500); 

    setTimeout(function(){
      element.style.width= "0px";
      elementText.style.opacity= "0"
    }, 2500); 
  }
}
