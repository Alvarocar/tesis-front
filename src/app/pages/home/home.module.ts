import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainTopbarComponent } from 'src/app/components/template/topbar/main-topbar/main-topbar.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainTopbarComponent,
  ]
})
export class HomeModule { }
