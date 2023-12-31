import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { GoalsObject } from '../../interfaces/interfaces';
import { Platform } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  public strings = strings;
  goals: GoalsObject[] = [];
  isLoading = false;
  height: any;

  constructor(
    private dataService: DataService,
    public plt: Platform
    ) { }

  ngOnInit() {

    this.isLoading = true;

    this.height = this.plt.height() / 4.4 + 'px';

    this.dataService.getDataGoals()
    .subscribe( resp => {
      this.goals = resp;

      if ( this.goals.length === 0 ) {

        this.height = '167.273px';

      } else if ( this.goals.length === 3 || this.goals.length === 2 ) {

        this.height = 'inherit !important';

      } else if ( this.goals.length >= 4 ) {
        this.height = this.plt.height() / 4.4 + 'px';

      }

      this.isLoading = false;

  } );

  }


}
