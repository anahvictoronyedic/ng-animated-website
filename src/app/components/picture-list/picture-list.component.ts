import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PICTURE } from 'src/abstracts/types';
import { PictureService } from 'src/app/services/picture/picture.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss'],
  host: {
		"[@pageNavSlide]": "routerOutletActive"
	},
  animations: [
    /**
     * Animation rules that will cause the picture overlay to slide in from the left when opened, and slide out to the right when closed
     */
		trigger(
			"pageNavSlide",
			[
        // slide in
        transition( "false => true" ,[
          group([
            query('.page',[
              animate( '0.7s' ,style({transform:'translateX(-100%)'}) )
            ]),
            query(':enter',[
              style({transform:'translateX(100%)'}),
              animate( '0.2s' ,  style({transform:'translateX(0%)'}) )
            ],{
              optional:true,
            })
          ])
        ]),
        // slide out
        transition( "true => false" ,[
          group([
            query('.page',[
              style({transform:'translateX(-100%)'}),
              animate( '0.2s' ,style({transform:'translateX(0%)'}) )
            ]),
            query(':leave',[
              animate( '0.3s' ,  style({transform:'translateX(100%)'}) )
            ])
          ])
        ])
      ]
    )
  ]
})
export class PictureListComponent implements OnInit {

  pictures!:PICTURE[];

  @ViewChild(RouterOutlet)
  routerOutlet!:RouterOutlet;

  // will be used by animation rules to know when the picture overlay is opened or closed
  routerOutletActive:boolean = false;

  constructor(private activatedRoute:ActivatedRoute,private pictureService:PictureService,private router:Router) {

    // monitor when the router emits a NavigationEnd event
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(()=>{
      this.updateRouterOutletActive();
    });
  }

  private updateRouterOutletActive(){
    if(this.routerOutlet) this.routerOutletActive = this.routerOutlet.isActivated;
  }

  async ngOnInit() {
    this.pictures = await this.pictureService.getPictures();
  }

  ngAfterContentInit (){
    window.setTimeout(()=>{
      // reflect initial state of the outer outlet
      this.updateRouterOutletActive();
    });
  }

  onClick(picture:PICTURE){

    window.scrollTo({ top: 0, behavior:'auto' });

    // open the picture overlay
    this.router.navigate(['view',picture.slug],{relativeTo:this.activatedRoute});
  }
}
