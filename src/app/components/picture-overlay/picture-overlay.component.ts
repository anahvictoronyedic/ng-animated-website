
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PICTURE } from 'src/abstracts/types';
import { PictureService } from 'src/app/services/picture/picture.service';

@Component({
  selector: 'app-picture-overlay',
  templateUrl: './picture-overlay.component.html',
  styleUrls: ['./picture-overlay.component.scss'],
})
export class PictureOverlayComponent implements OnInit {

  picture!:PICTURE;

  // the slug of the picture that should be in the overlay
  private slug!:string;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private pictureService:PictureService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( param => {
      this.slug = param['slug'];
      this.load().then();
    });
  }

  private async load(){
    const picture = await this.pictureService.getPictureBySlug(this.slug);
    if(picture){
      this.picture = picture;
    }
    else{
      await this.close();
      alert('Picture not found.');
    }
  }

  async close(){
    // navigate back
    this.router.navigate(['../..'],{relativeTo:this.activatedRoute});
  }
}
