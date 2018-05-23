import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { GoogleChartService } from './google-chart.service';PieChartComponent
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GoogleChartsBaseService } from './google-charts-base-service.service';
import { PieChartComponent } from './graph/pieChart.component';
GoogleChartsBaseService
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [GoogleChartService,GoogleChartsBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
