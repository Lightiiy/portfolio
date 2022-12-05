import { Component, OnInit } from '@angular/core';
import { PhotoLibraryService } from 'src/app/service/photo-library/photo-library.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public showMyPhoto: boolean = false;
  public currentImage!: string;


  constructor( public photoLibraryService: PhotoLibraryService) { 
    this.changeImageAfterInterval();
  }

  changeImageAfterInterval(){
    this.photoLibraryService.imageLibrary.subscribe( value => {
      this.currentImage = value;
      console.log(value)
    });
    // let about = document.getElementById("about");
    // about!.style.backgroundImage = "url('" + this.dogImages +"')";
  }



  cvEvent()
  {
    console.log("test");
  }

  changePhotos(){
    this.showMyPhoto = !this.showMyPhoto;
    this.photoLibraryService.changeSourceOfImages();
  }

  ngOnInit(): void {
  }

}
