import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private statusbar: StatusBar) {
    this.statusbar.backgroundColorByHexString('#f4f4f4');
  }

}
