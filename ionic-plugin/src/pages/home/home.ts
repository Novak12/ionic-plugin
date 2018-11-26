import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var CoolPlugin;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    CoolPlugin.showToast("124245365fdhg");
  }

}
