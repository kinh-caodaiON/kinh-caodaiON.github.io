import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CaodaionAppRoutingModule} from './caodaion-app-routing.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MenuItemComponent,
    FooterComponent
  ],
  exports: [
    MenuItemComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CaodaionAppRoutingModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule
  ]
})
export class CaodaionAppModule { }
