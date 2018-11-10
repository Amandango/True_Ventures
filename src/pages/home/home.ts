import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DescriptionPage } from '../description/description';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.changePage()
  }

  changePage() {

    let TIME_IN_MS = 15000;
    let changePage = setTimeout( () => {
      this.navCtrl.push(DescriptionPage)
}, TIME_IN_MS);
  }

}
