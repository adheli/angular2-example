import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.css']
})
export class ChartExampleComponent implements OnInit {

  dataBarSet: number[] = [51, 65, 40, 49, 60, 37, 40];
  dataLineSet: number[] = [200, 185, 590, 621, 250, 400, 95];

  fillInDataSet(dataBarSet, dataLineSet) {
    var barChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "Sales",
        type: 'line',
        data: dataLineSet,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
      },
      {
        type: 'bar',
        label: "Visitor",
        data: dataBarSet,
        fill: false,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }]
    };

    return barChartData;
  }

  createChart(elementName, chartData) {
    return new Chart(elementName, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: false,
        legend: {
          display: true
        },
        tooltips: {
          mode: 'label'
        },
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
            gridLines: {
              display: false
            }
          }, {
            type: "linear",
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              display: false
            }
          }]
        }
      }
    });
  }

  constructor() { }

  ngOnInit() {
    var barChartData = this.fillInDataSet(this.dataBarSet, this.dataLineSet);
    var myChart = this.createChart("myChart", barChartData);
  }

}
