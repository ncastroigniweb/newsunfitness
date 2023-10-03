import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {

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
  this.router.navigate(['/posts']);
}

getData() {

  this.dataService.getDataTags()
  .subscribe( resp => {
    this.getItems = resp;
    this.isLoading = false;

} );
}

}
