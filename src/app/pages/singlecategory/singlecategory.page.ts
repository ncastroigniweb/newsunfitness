import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { strings } from '../../config/strings';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlecategory',
  templateUrl: './singlecategory.page.html',
  styleUrls: ['./singlecategory.page.scss'],
})
export class SinglecategoryPage implements OnInit {

  public strings = strings;
  getItems = [];
  title: string;
  id: any;
  isLoading = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.isLoading = true;
    this.route.params.subscribe(
      data => {
        this.id = data.id;
        this.title = data.title;
        this.getData();

        if (!this.id) {
          this.goBack();
        }
      }
    );
  }

goBack() {
  this.router.navigate(['/categories']);
}

getData() {

  this.dataService.getDataDietsByCategory(this.id)
  .subscribe( resp => {

    this.getItems = resp;
    this.isLoading = false;

} );
}

}
