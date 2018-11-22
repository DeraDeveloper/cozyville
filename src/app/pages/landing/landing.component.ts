import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared-service/shared.service';
import { PictureRequest } from './models/picture-request';
import { Constants } from 'src/app/utils/constants';
import { isNullOrUndefined } from 'util';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private service: SharedService, private alert: AlertService) { }

  pictureRequest: PictureRequest = new PictureRequest(Constants.SUMMER_IMAGES, Constants.DEFAULT_PAGE);

  ngOnInit() {
  }

  getPictures() {
    debugger;
    this.service.getPictures(this.pictureRequest).subscribe(
      response => {
        console.log(response);
        if( isNullOrUndefined(response) ||  isNullOrUndefined(response.body)){
          this.alert.danger("Sorry, no response was received.");
          return;
        }
        if(response.status != Constants.RESPONSE_STATUS_200){
          if(response.body.errors){
            let err = response.body.errors;
            let msg;
            err.forEach(element => {
              msg = element + "\n";
            });
            this.alert.danger(msg)
          }else {
            this.alert.danger("An error occurred in the service. Please contact admin.");
          }
          return;
        }
        const data = response.body;
      }, error => {
        console.log(error)
      }
    );
  }

  // Handle package selection, set search parameter based on current selection
  onPackageSelected(e) {
    debugger;
    let id = e.currentTarget.id;
    if(id == "summer"){
      this.pictureRequest.searchParam = Constants.SUMMER_IMAGES;
    }else{
      this.pictureRequest.searchParam = Constants.SUMMER_IMAGES;
    }
    this.getPictures();
  }

  // Handle page change event on slide show to retrieve the next or previous page fromt he server
  onPageChange() {

  }

}
