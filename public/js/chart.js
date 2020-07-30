//var ctx = document.getElementById('myChart1').getContext('2d');
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
