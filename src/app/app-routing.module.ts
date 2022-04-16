import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureListComponent } from './components/picture-list/picture-list.component';
import { PictureOverlayComponent } from './components/picture-overlay/picture-overlay.component';

const routes: Routes = [
  {
    path: "pictures",
    component: PictureListComponent,
    children: [
      {
        path: "view/:slug",
        component: PictureOverlayComponent
      }
    ]
  },
  {
    path:'',
    redirectTo:'pictures',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
