/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { strings } from '../../config/strings';
import { ExercisesObject } from '../../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-singleday',
  templateUrl: './singleday.page.html',
  styleUrls: ['./singleday.page.scss'],
})
export class SingledayPage implements OnInit {

  public strings = strings;
  exercises: ExercisesObject[] = [];
  day: any;
  isLoading = false;
  id: any;
  height: any;


  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform,

    ) {}

    ngOnInit() {

    }

    ngOnDestroy() {
      //this.admob.HideBannerAd();
    }

    async ionViewWillEnter() {
      this.isLoading = true;
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.day = data.day;

          this.getExercises();

          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }

  getExercises() {

    this.dataService.getDataWorkoutExercisesByDay(this.id, this.day)
    .subscribe( resp => {
      this.exercises = resp;
      this.isLoading = false;
  } );
}

mi_progreso(){
  this.router.navigate(['/miprogreso', this.id, this.day]);
}

}
