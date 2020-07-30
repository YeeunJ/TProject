//var ctx = document.getElementById('myChart1').getContext('2d');
console.log(data3);
var chart1 = {
  labels: ['7월 14일(화)', '7월 15일(수)', '7월 16일(목)', '7월 17일(금)', '7월 18일(토)', '7월 19일(일)', '오늘(월)'],
  datasets: [{
      label: '카메라 1',
      borderColor: color[0],
      backgroundColor: color[0],
      fill: false,
      data: [65, 79, 120, 110, 132, 55, 87],
      yAxisID: 'y-axis-1',
    }, {
      label: '카메라 2',
      borderColor: color[1],
      backgroundColor: color[1],
      fill: false,
      data: [95, 101, 78, 72, 115, 62, 63],
      yAxisID: 'y-axis-1'
    },
    {
      label: '카메라 3',
      borderColor: color[2],
      backgroundColor: color[2],
      fill: false,
      data: [90, 100, 72, 68, 103, 83, 80],
      yAxisID: 'y-axis-1',
    },
    {
      label: '총인원',
      borderColor: color[3],
      backgroundColor: color[3],
      fill: false,
      data: [250, 280, 270, 250, 350, 200, 230],
      yAxisID: 'y-axis-1',
    }
  ]
};
var chart2 = {
  labels: ['0~3시', '3~6시', '6~9시', '9~12시', '12~15시', '15~18시', '18~21시', '18~21시'],
  datasets: [{
      label: '카메라 1',
      borderColor: color[0],
      backgroundColor: color[0],
      fill: false,
      data: [65, 79, 120, 110, 132, 55, 87, 79],
      yAxisID: 'y-axis-1',
    }, {
      label: '카메라 2',
      borderColor: color[1],
      backgroundColor: color[1],
      fill: false,
      data: [95, 101, 78, 72, 115, 62, 63, 102],
      yAxisID: 'y-axis-1'
    },
    {
      label: '카메라 3',
      borderColor: color[2],
      backgroundColor: color[2],
      fill: false,
      data: [90, 100, 72, 68, 103, 83, 80, 100],
      yAxisID: 'y-axis-1',
    },
    {
      label: '총인원',
      borderColor: color[3],
      backgroundColor: color[3],
      fill: false,
      data: [250, 280, 270, 250, 350, 200, 230, 280],
      yAxisID: 'y-axis-1',
    }
  ]
};
var chart3 = {
  labels: ['5분', '10분', '30분', '1시간'],
  datasets: [{
      label: '카메라 1',
      borderColor: color[0],
      backgroundColor: color[0],
      fill: false,
      data: [15, 30, 35, 60],
      yAxisID: 'y-axis-1',
    }, {
      label: '카메라 2',
      borderColor: color[1],
      backgroundColor: color[1],
      fill: false,
      data: [20, 40, 42, 50],
      yAxisID: 'y-axis-1'
    },
    {
      label: '카메라 3',
      borderColor: color[2],
      backgroundColor: color[2],
      fill: false,
      data: [13, 20, 22, 40],
      yAxisID: 'y-axis-1',
    }
  ]
};

window.onload = function() {
  var ctx = document.getElementById('myChart1').getContext('2d');
  window.myLine = Chart.Line(ctx, {
    data: chart1,
    options: {
      responsive: true,
      hoverMode: 'index',
      stacked: false,
      title: {
        display: false,
      },
      scales: {
        yAxes: [{
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines:{
            color: 'rgba(255, 255, 255, 0.4)',
            lineWidth:1
          }
        }],
        ticks: {
          stepSize: 5
        }
      }
    }
  });
}
  document.getElementById('chartBtn1').addEventListener('click', function() {
    document.getElementById('myChart3').style.display = 'none';
    document.getElementById('myChart2').style.display = 'none';
    document.getElementById('myChart1').style.display = 'block';
    document.getElementById('chartBtn1').className = 'clickedCriteria';
    document.getElementById('chartBtn2').className = 'criteria';
    document.getElementById('chartBtn3').className = 'criteria';
    var ctx = document.getElementById('myChart1').getContext('2d');
    window.myLine = Chart.Line(ctx, {
      data: chart1,
      options: {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
          display: false,
        },
        scales: {
          yAxes: [{
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines:{
  						color: 'rgba(255, 255, 255, 0.4)',
  						lineWidth:1
  					}
          }],
          ticks: {
            stepSize: 5
          }
        }
      }
    });
  });
  document.getElementById('chartBtn2').addEventListener('click', function() {
    document.getElementById('myChart1').style.display = 'none';
    document.getElementById('myChart3').style.display = 'none';
    document.getElementById('myChart2').style.display = 'block';
    document.getElementById('chartBtn2').className = 'clickedCriteria';
    document.getElementById('chartBtn1').className = 'criteria';
    document.getElementById('chartBtn3').className = 'criteria';
    var ctx = document.getElementById('myChart2').getContext('2d');
    window.myLine = Chart.Line(ctx, {
      data: chart2,
      options: {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
          display: false,
        },
        scales: {
          yAxes: [{
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines:{
  						color: 'rgba(255, 255, 255, 0.4)',
  						lineWidth:1
  					}
          }],
          ticks: {
            stepSize: 5
          }
        }
      }
    });
  });
  document.getElementById('chartBtn3').addEventListener('click', function() {
      document.getElementById('myChart1').style.display = 'none';
      document.getElementById('myChart2').style.display = 'none';
      document.getElementById('myChart3').style.display = 'block';
      document.getElementById('chartBtn3').className = 'clickedCriteria';
      document.getElementById('chartBtn1').className = 'criteria';
      document.getElementById('chartBtn2').className = 'criteria';

      var ctx = document.getElementById('myChart3').getContext('2d');

      window.myLine = Chart.Line(ctx, {
        data: chart3,
        options: {
          responsive: true,
          hoverMode: 'index',
          stacked: false,
          title: {
            display: false,
            text: '최근 일정 시간 평균 인원수 차트'
          },
          scales: {
            yAxes: [{
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'left',
              id: 'y-axis-1',
              gridLines:{
    						color: 'rgba(255, 255, 255, 0.4)',
    						lineWidth:1
    					}
            }],
            ticks: {
              stepSize: 5
            }
          }
        }
      });
    });
