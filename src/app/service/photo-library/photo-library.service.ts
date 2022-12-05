import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {dogImages} from './../../../assets/images/dog/dogList'
import { meImages } from 'src/assets/me/meList';

@Injectable({
  providedIn: 'root'
})
export class PhotoLibraryService {

  public imageLibrary: BehaviorSubject<string> = new BehaviorSubject('null');
  public imageDecideSource: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private photoTab!: string[];
  private dogTab: string[] = dogImages();
  private meTab: string[] = meImages();

  constructor() {
    this.changeSourceOfImages()
    let i = 0;
    setInterval( () => {
      this.imageLibrary.next(this.photoTab[i]);
      i = (i+1)%this.photoTab.length;
    }, 1000)
  }

  changeSourceOfImages(){ 
    if(this.imageDecideSource){
      this.photoTab = this.dogTab;
      }
    else
      {
        this.photoTab = this.meTab;
      }
      this.imageDecideSource.next(!this.imageDecideSource.value);
      console.log(this.photoTab);
    }


}
