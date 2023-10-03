import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public strings = strings;
  getItems = [];
  title: string;
  id: any;
  isLoading = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    ) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.isLoading = true;
    this.getData();
  }

goBack() {
  this.router.navigate(['/diets']);
}

getData() {

  this.dataService.getDataCategories()
  .subscribe( resp => {
    this.getItems = resp;
    this.isLoading = false;

} );
}

}
