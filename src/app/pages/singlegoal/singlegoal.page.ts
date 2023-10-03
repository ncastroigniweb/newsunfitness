import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-singlegoal',
  templateUrl: './singlegoal.page.html',
  styleUrls: ['./singlegoal.page.scss'],
})
export class SinglegoalPage implements OnInit {

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
  this.router.navigate(['/goals']);
}

getData() {

  this.dataService.getDataWorkoutsByGoal(this.id)
  .subscribe( resp => {

    this.getItems = resp;
    this.isLoading = false;

} );
}

}
