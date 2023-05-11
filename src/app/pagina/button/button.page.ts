import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor(public nav : NavController) { }

  openHomePage(text: string){
    this.nav.navigateForward('home');
    console.log(text);
    
  }

  openInbox(text2: string){
    this.nav.navigateForward('folder/inbox');
    console.log(text2);
    
  }



  ngOnInit() {
  }

}
