import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleChartService } from '../google-chart.service';
import { PieChartConfig } from '../PieChartConfig';

@Component({
  selector: 'app-input',
  template: `
  <h2>{{title}}</h2>

<div class="divTable">
    <div class="divTableBody">
        <div class="divTableRow">
            <div class="divTableCell"><pie-chart [data]="data1" [config]="config1" [elementId]="elementId1"></pie-chart></div>
            <div class="divTableCell"><pie-chart [data]="data2" [config]="config2" [elementId]="elementId2"></pie-chart></div>
        </div>
    </div>
</div>
  `,
  styles: []
})
export class InputComponent implements OnInit {

  constructor(private route: Router,private _googleChart: GoogleChartService) { }

  title = 'Reusable charts sample';

  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;
  
  ngOnInit(): void {     

    //Piechart1 Data & Config
    this.data1 = [['Task', 'Hours per Day'],
    ['Eat',      3],
    ['Commute',  2],
    ['Watch TV', 5],
    ['Video games', 4],
    ['Sleep',    10]];

    this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
    this.elementId1 = 'myPieChart1';

    //Piechart2 Data & Config
    this.data2 = [['Task', 'Hours per Day'],
                  ['Work',     11],
                  ['Eat',      2],
                  ['Commute',  2],
                  ['Watch TV', 2],
                  ['Sleep',    7]]

    this.config2 = new PieChartConfig('My Daily Activities at 30 years old', 0.4);
    this.elementId2 = 'myPieChart2';
  }

}