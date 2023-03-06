import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { PhotoLibraryService } from 'src/app/service/photo-library/photo-library.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  public showMyPhoto: boolean = false;
  public setBackground: boolean = true;
  public currentImage!: string;


  constructor( public photoLibraryService: PhotoLibraryService, private renderer: Renderer2, private elem: ElementRef) { 
    this.changeImageAfterInterval();
  }

  changeImageAfterInterval(){
    this.photoLibraryService.imageLibrary.subscribe( value => {
      if(value === 'null')
        {
          this.setBackground = false;
        }
        else 
        {
        this.currentImage = value;
        this.setBackground = true;
        }
    });
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
