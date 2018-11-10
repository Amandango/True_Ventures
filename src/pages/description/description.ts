import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-description',
  templateUrl: 'description.html'
})
export class DescriptionPage {

    public building: boolean = false;

  constructor(public navCtrl: NavController) {

  }

}