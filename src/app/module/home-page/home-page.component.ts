import { Component, OnInit } from '@angular/core';
import {readFileSync, promises as fsPromises} from 'fs';
import {dogImages} from './../../../assets/images/dog/dogList'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public showMyPhoto: boolean = false;
  private dogImages: string[] = dogImages()


  constructor() { 
    this.changeImageAfterInterval();
  }

  changeImageAfterInterval(){
    let i = 0;
      setInterval( () => {
        console.log(i);
        let about = document.getElementById("about");
        about!.style.backgroundImage = "url('" + this.dogImages[i] +"')";
        i = (i+1)%this.dogImages.length
      },
      10000);
  }



  cvEvent()
  {
    console.log("test");
  }

  changePhotos(){
    this.showMyPhoto = !this.showMyPhoto;
  }

  ngOnInit(): void {
  }

}
