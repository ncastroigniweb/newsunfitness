import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { strings } from '../../config/strings';
import { QuotesObject } from '../../interfaces/interfaces';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  public strings = strings;
  quotes: QuotesObject[] = [];
  isLoading = false;

  slideOpts = {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    freeMode: false
  };

  constructor(
    private dataService: DataService
    ) { }

  ngOnInit() {

    this.isLoading = true;

    this.dataService.getDataQuotes()
    .subscribe( resp => {
      this.quotes = resp;
      this.isLoading = false;

  } );

  }

}
