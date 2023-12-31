import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { strings } from '../../config/strings';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-singleexercise',
  templateUrl: './singleexercise.page.html',
  styleUrls: ['./singleexercise.page.scss'],
})
export class SingleexercisePage implements OnInit {

  public strings = strings;
  exercise: any = {};
  isLoading = false;
  id: any;
  isInfoHidden = true;
  isInstruHidden = true;
  isTipsHidden = true;
  orientation = 'landscape';

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private streamingMedia: StreamingMedia,
    private screenOrientation: ScreenOrientation
    ) {}

    ngOnInit() {
      if( this.orientation === 'landscape') {
        this.setPortrait();
      }
    }

    async ionViewWillEnter() {
      this.isLoading = true;
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.getDetails();

          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }

    toggleInfo() {
      this.isInfoHidden = !this.isInfoHidden;
    }

    toggleInstru() {
      this.isInstruHidden = !this.isInstruHidden;
    }

    toggleTips() {
      this.isTipsHidden = !this.isTipsHidden;
    }

    getDetails() {

    this.dataService.getDataExerciseById(this.id)
    .subscribe( resp => {

      this.exercise = resp[0];
      this.isLoading = false;

  } );
}

play() {
  const options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played'); },
    errorCallback: (e) => { console.log('Error streaming'); },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: true
  };

  this.streamingMedia.playVideo(this.exercise.exercise_video, options);
}

setPortrait() {
  // set to portrait
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
}

}
