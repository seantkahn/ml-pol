import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
})

export class HomePage {

  constructor(public navCtrl: NavController) {}

  goToPage2() {
    this.navCtrl.navigateForward('/page2');
  }
}
