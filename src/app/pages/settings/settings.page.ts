import { Component, OnInit } from '@angular/core';
import { config } from '../../config/config';
import { strings } from '../../config/strings';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public strings = strings;
  public config = config;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  openUrl(url) {
    this.iab.create( url, '_system' );
  }

}
