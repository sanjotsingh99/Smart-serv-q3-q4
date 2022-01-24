import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myChart:any;

  constructor() { }

  ngOnInit(): void {

   this.createChart1();
   this.createChart2();
  }

  createChart1(){
    this.myChart = new Chart("myChart1", {
      type: 'bar',
      data: {
          labels: ['Everette', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
          datasets: [{
              label: '# of Votes',
              data: [100000,80000,49000,45000,35000,28000],
              backgroundColor: [
                  'rgb(0, 128, 128)',
                  'rgb(0, 128, 128)',
                  'rgb(0, 128, 128)',
                  'rgb(0, 128, 128)',
                  'rgb(0, 128, 128)',
                  'rgb(0, 128, 128)'
              ],
              // borderColor: [
              //   'rgb(0,0,0)',
              //   'rgb(0,0,0)',
              //   'rgb(0,0,0)',
              //   'rgb(0,0,0)',
              //   'rgb(0,0,0)',
              //   'rgb(0,0,0)'
              // ],
              borderWidth: 1
          }]
      },
      options: {
        plugins:{
          title:{
            display:true,
            text:"Revenue for November 2019",
            position:'bottom'
          },
          legend:{
            display:false
          },
        },
        indexAxis:'y',
          scales: {
              y: {
                  beginAtZero: true
              },
              x:{
                title:{
                  display:true,
                  text:"$"
                }
              }
          }
      }
  });
  
  }

  createChart2(){

    this.myChart = new Chart("myChart2", {
      type: 'bar',
      data: {
          labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance','Material Sale'],
          datasets: [{
              label: '# of Votes',
              data: [150000,135000,80000,78000,42000,40000,5000],
              backgroundColor: [
                  'rgb(0, 128, 128)',
                  'rgb(0, 128, 128)',
                  'rgb(0, 128, 128)',
                  'rgb(0, 128, 128)',
                  'rgb(0, 128, 128)',
                  'rgb(0, 128, 128)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        plugins:{
          title:{
            display:true,
            text:"Revenue for November 2019",
            position:'bottom'
          },
          legend:{
            display:false
          },
        },
        indexAxis:'y',
          scales: {
              y: {
                  beginAtZero: true
              },
              x:{
                title:{
                  display:true,
                  text:"$"
                }
              }
          }
      }
  });

  }
}
