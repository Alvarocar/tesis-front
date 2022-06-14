import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainTopbarComponent } from 'src/app/components/template/topbar/main-topbar/main-topbar.component';
import { PresentationComponent } from './children/presentation/presentation.component';
import { ExplainComponent } from './children/explain/explain.component';


@NgModule({
  declarations: [
    HomeComponent,
    PresentationComponent,
    ExplainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainTopbarComponent,
  ]
})
export class HomeModule { }
