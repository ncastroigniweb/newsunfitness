import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {

  @Input() description: any;
  public strings = strings;


  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
