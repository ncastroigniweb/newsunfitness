/* eslint-disable eol-last */
import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  public strings = strings;
  aboutus: any;
  isLoading = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.isLoading = true;

    this.dataService.getDataStrings()
    .subscribe( resp => {
      const data = resp[0];
      this.aboutus = data.st_aboutus;
      this.isLoading = false;

  } );

  }

}