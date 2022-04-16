import { Injectable } from '@angular/core';
import { reduce } from 'lodash';
import { PICTURE } from 'src/abstracts/types';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() {}

  async getPictureBySlug( slug:string ){
    return (await this.getPictures()).find ( picture => picture.slug == slug );
  }

  async getPictures() : Promise<PICTURE[]>{
    return [
      {
        id:1,
        title:'New Zealand Lake Zea Hotel',
        slug:'new-zealand-lake-zea-hotel',
        image:{
          id:1,
          url:`assets/images/first.jpg`
        },
        thumbnail:{
          id:1,
          url:`assets/images/first-sm.jpg`
        },
      },
      {
        id:2,
        title:'New Zealand Dock Habour',
        slug:'new-zealand-dock-habour',
        image:{
          id:2,
          url:`assets/images/second.jpg`
        },
        thumbnail:{
          id:2,
          url:`assets/images/second-sm.jpg`
        },
      },
      {
        id:3,
        title:'New Zealand Mountain Side House',
        slug:'new-zealand-mountain-side-house',
        image:{
          id:3,
          url:`assets/images/third.jpg`
        },
        thumbnail:{
          id:3,
          url:`assets/images/third-sm.jpg`
        },
      },
      {
        id:4,
        title:'New Zealand Bar Beach',
        slug:'new-zealand-bar-beach',
        image:{
          id:4,
          url:`assets/images/fourth.jpg`
        },
        thumbnail:{
          id:4,
          url:`assets/images/fourth-sm.jpg`
        },
      }
    ];
  }
}
