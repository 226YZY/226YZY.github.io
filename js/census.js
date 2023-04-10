//https://baidutongji.226yzy.com/api?access_token=121.ef8297f7a9e5de1abd7e1b79037f406a.YadCvp8Y3g_TyWr0nooh9x4IeEolrMlCLGC_nwe.vh0Yuw&site_id=16940767&start_date=20210705&end_date=20220127&metrics=pv_count&method=visit/district/a
var start_date = '20210705' // 开始日期
var date = new Date() //;
var end_date ='' + date.getFullYear() + (date.getMonth() > 8 ? (date.getMonth() + 1) : ("0" + (date.getMonth() + 1))) + (date.getDate() > 9 ? date.getDate() : ("0" + date.getDate())); // 结束日期
var access_token = '121.3cf4adea025e9d14e7f61947ba95b918.Y5BedgZzRwrWlIVoMMK0cwNomo-Rm71uBJ6ycj-.BTOgAw' // accessToken
var site_id = '16940767' // 网址id
var dataUrl = 'https://baidutongji.226yzy.com/api?access_token=' + access_token + '&site_id=' + site_id
var metrics = 'pv_count' // 统计访问次数 PV 填写 'pv_count'，统计访客数 UV 填写 'visitor_count'，二选一
var metricsName = (metrics === 'pv_count' ? '访问次数' : (metrics === 'visitor_count' ? '访客数' : ''))
// 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
var color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4c4948' : 'rgba(255,255,255,0.7)'
var myvisit = 2681 + 5700; //我本人大概访问的次数，用于修正浙江省的访问数据
var othervisit=1180;
// 访问地图
function mapChart() {
  let script = document.createElement("script")
  //let paramUrl = '&start_date=' + start_date + '&end_date=' + end_date + '&metrics=' + metrics + '&method=visit/district/a';

  let paramUrl = '&start_date=' + start_date + '&end_date=' + end_date + '&metrics=' + metrics + '&method=overview/getDistrictRpt';
  fetch(dataUrl + paramUrl).then(data => data.json()).then(data => {
    let mapName = data.result.items[0]
    let mapValue = data.result.items[1]
    let mapArr = []
    let max = mapValue[0][0] - myvisit
    for (let i = 0; i < mapName.length; i++) {
      if (mapName[i][0] == "浙江") {
        mapArr.push({
          name: mapName[i][0],
          value: (mapValue[i][0] - myvisit)
        })
      }else if (mapName[i][0]== "河南") {
        mapArr.push({
          name: mapName[i][0],
          value: (mapValue[i][0] - othervisit)
        })
      } else {
        mapArr.push({
          name: mapName[i][0],
          value: mapValue[i][0]
        })
      }
    }
    let mapArrJson = JSON.stringify(mapArr)
    script.innerHTML = `
      var mapChart = echarts.init(document.getElementById('map-chart'), 'light');
      var mapOption = {
        title: {
          text: '博客访问来源地图',
          x: 'center',
          textStyle: {
            color: '${color}'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          min: 0,
          max: ${max},
          left: 'left',
          top: 'bottom',
          text: ['高','低'],
          color: ['#1E90FF', '#AAFAFA'],
          textStyle: {
            color: '${color}'
          },
          calculable: true
        },
        series: [{
          name: '${metricsName}',
          type: 'map',
          mapType: 'china',
          showLegendSymbol: false,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(255, 255, 255, 0.9)',
              borderColor: 'rgba(0, 0, 0, 0.5)'
            },
            emphasis: {
              areaColor: 'gold'
            }
          },
          data: ${mapArrJson}
        }]
      };
      mapChart.setOption(mapOption);
      window.addEventListener("resize", () => { 
        mapChart.resize();
      });`
    document.getElementById('map-chart').after(script);
  }).catch(function (error) {
    console.log(error);
  });
}

// 访问趋势
function trendsChart() {
  let script = document.createElement("script")
  let paramUrl = '&start_date=' + start_date + '&end_date=' + end_date + '&metrics=' + metrics + '&method=trend/time/a&gran=month'
  fetch(dataUrl + paramUrl)
    .then(data => data.json())
    .then(data => {
      let monthArr = []
      let monthValueArr = []
      let monthName = data.result.items[0]
      let monthValue = data.result.items[1]
      for (let i = Math.min(monthName.length, 12) - 1; i >= 0; i--) {
        monthArr.push(monthName[i][0].substring(0, 7).replace('/', '-'))
        if (monthValue[i][0] !== '--') {
          monthValueArr.push(monthValue[i][0])
        } else {
          monthValueArr.push(null)
        }
      }
      let monthArrJson = JSON.stringify(monthArr)
      let monthValueArrJson = JSON.stringify(monthValueArr)

      
      script.innerHTML = `
        var trendsChart = echarts.init(document.getElementById('trends-chart'), 'light');
        var trendsOption = {
          textStyle: {
            color: '${color}'
          },
          title: {
            text: '博客访问统计图',
            x: 'center',
            textStyle: {
              color: '${color}'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            name: '日期',
            type: 'category',
            boundaryGap: false,
            nameTextStyle: {
              color: '${color}'
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              color: '${color}'
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '${color}'
              }
            },
            data: ${monthArrJson}
          },
          yAxis: {
            name: '${metricsName}',
            type: 'value',
            nameTextStyle: {
              color: '${color}'
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              color: '${color}'
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '${color}'
              }
            }
          },
          series: [{
            name: '${metricsName}',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            itemStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            areaStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              }, {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            data: ${monthValueArrJson},
            markLine: {
              data: [{
                name: '平均值',
                type: 'average',
                label: {
                  color: '${color}'
                }
              }]
            }
          }]
        };
        trendsChart.setOption(trendsOption);
        window.addEventListener("resize", () => { 
          trendsChart.resize();
        });`
      document.getElementById('trends-chart').after(script);
    }).catch(function (error) {
      console.log(error);
    });
}

// 访问来源
function sourcesChart() {
  let script = document.createElement("script")
  let paramUrl = '&start_date=' + start_date + '&end_date=' + end_date + '&metrics=' + metrics + '&method=source/all/a';
  fetch(dataUrl + paramUrl)
    .then(data => data.json())
    .then(data => {
      monthArr = [];
      let sourcesName = data.result.items[0]
      let sourcesValue = data.result.items[1]
      let sourcesArr = []
      for (let i = 0; i < sourcesName.length; i++) {
        if (sourcesName[i][0].name != "直接访问"){
          sourcesArr.push({
            name: sourcesName[i][0].name,
            value: sourcesValue[i][0]
        })
        }else{
          sourcesArr.push({
            name: sourcesName[i][0].name,
            value: sourcesValue[i][0]-myvisit
        })
        }
      }
      let sourcesArrJson = JSON.stringify(sourcesArr)

      console.log(metricsName);
      console.log(sourcesArrJson);
      script.innerHTML = `
        var sourcesChart = echarts.init(document.getElementById('sources-chart'), 'light');
        var sourcesOption = {
          title: {
            text: '博客访问来源统计图',
            x: 'center',
            textStyle: {
              color: '${color}'
            }
          },
          legend: {
            top: 'bottom',
            textStyle: {
              color: '${color}'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [{
            name: '${metricsName}',
            type: 'pie',
            radius: [30, 80],
            center: ['50%', '50%'],
            roseType: 'area',
            label: {
              color: '${color}',
              formatter: "{b} : {c} ({d}%)"
            },
            data: ${sourcesArrJson},
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(255, 255, 255, 0.5)'
              }
            }
          }]
        };
        sourcesChart.setOption(sourcesOption);
        window.addEventListener("resize", () => { 
          sourcesChart.resize();
        });`
      document.getElementById('sources-chart').after(script);
    }).catch(function (error) {
      console.log(error);
    });
}

if (document.getElementById('map-chart')) mapChart()
if (document.getElementById('trends-chart')) trendsChart()
if (document.getElementById('sources-chart')) sourcesChart()