import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.scss'],
})
export class BackbuttonComponent implements OnInit {

  @Input() color;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  backButton() {
    this.navCtrl.back();
  }

}
