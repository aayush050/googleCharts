import { Component, Input, OnInit } from '@angular/core';
import { PieChartConfig } from './../PieChartConfig';
import { GoogleChartsBaseService } from '../google-charts-base-service.service';
import { GoogleChartService } from '../google-chart.service';
declare var google: any;


@Component({
  selector: 'app-graph',
  template: `
  <div id="{{elementId}}" style="width: 800px; height: 400px;"></div>
  `,
  styles: []
})
export class PieChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: PieChartConfig;
    @Input() elementId: String;

    constructor(private _pieChartService: GoogleChartService) {}

    ngOnInit(): void {
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config); 
    }
}