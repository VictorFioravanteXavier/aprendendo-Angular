import { Component, OnInit } from '@angular/core';
import { Chart } from '../../../node_modules/chart.js/auto';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div style="width: 800px;"><canvas id="Grafico"></canvas></div>
  `
})
export class AppComponent implements OnInit {
  title = 'APIGraficos';
  data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    new Chart(
      'Grafico', // Passando o ID do elemento canvas diretamente
      {
        type: 'bar',
        data: {
          labels: this.data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: this.data.map(row => row.count)
            }
          ]
        }
      }
    );
  }
}
