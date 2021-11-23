import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CaodaionAppComponent} from './caodaion-app.component';
import {HomeComponent} from '../../pages/home/home.component';
import { ListComponent } from 'src/app/pages/list/list.component';
const routes: Routes = [
  {
    path: '', component: CaodaionAppComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'tap-kinh',
        component: ListComponent
      },
      {
        path: 'tap-kinh/:type',
        component: ListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaodaionAppRoutingModule {
}
