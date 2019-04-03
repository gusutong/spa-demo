$(function(){
  var xData = [],
      yData = [];
  for(var p=0; p<=1;p+=0.1){
    xData.push(p);
    yData.push(h(p));
    console.log(`p=${p},h(p)=${h(p)}`);
  }
  function h(p){
    if(p === 0){
      return 0;
    }
    return -1 * p * Math.log2(p) - (1-p) * Math.log2(1-p);
  }
  var myChart = echarts.init($('.main')[0]);

  var option = {
    title: {
      text: '二进商函数曲线'   
    },
    tooltip: {},
    legend: {                                                             
      data:['二进商']                                                       
    },
    xAxis: {                                                              
      data: xData
    },
    yAxis: {},
    series: [{
      name: '二进商',
      type: 'line',
      data: yData
    }]
  };                                                                        
  myChart.setOption(option);            
});
