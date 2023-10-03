import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlebody',
  templateUrl: './singlebody.page.html',
  styleUrls: ['./singlebody.page.scss'],
})
export class SinglebodyPage implements OnInit {

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
  this.router.navigate(['/bodyparts']);
}

getData() {

  this.dataService.getDataExercisesByBodypart(this.id)
  .subscribe( resp => {

    this.getItems = resp;
    this.isLoading = false;

} );
}

}
