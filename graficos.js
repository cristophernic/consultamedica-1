function construirGraficos() {
        $('#graficolcn').highcharts({
        title: {
            text: 'LCN',
            x: -20 //center
        },
        xAxis: {
            categories: ['6', '7', '8', '9', '10',  '11', '12', '13', '14', '15']
        },
        yAxis: {
            title: {
                text: 'Milimetros (mm)'
            },
            tickPositions: [0.2, 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 11]
        },
        credits: {enabled:false},
        colors: ['#313131', '#313131', '#313131'],
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
         },
        series: [{
            name: '(-) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.26, 0.77, 1.4, 2.05, 2.75,3.65, 4.64, 5.82, 7.1, 8.02]
        }, {
            name: 'Media',
            type: "line",
            marker: { enabled: false },
            data: [0.38, 0.89, 1.54, 2.25, 3.05,4.05, 5.29, 6.65, 7.98, 9.01]
        }, {
            name: '(+) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.53, 1.04, 1.71, 2.49, 3.42,4.64, 6.12, 7.67, 9.01, 10.01]
        }]
    });
}

$( '#graficoDbp' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico DBP");
    $('#popupBody').html("<div id='graficoDbpView'></div>");
    $('#graficoDbpView').highcharts({
       title: {
           text: 'DBP',
           x: -20
       },
       subtitle: {
           text: 'Milimetros (mm)',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [10,30, 50, 72, 90, 114]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: 'Pct. 50',
           marker: {enabled: false},
           data: [21,24,27,30,34,37,41,44,47,50,53,56,59,62,64,67,70,72,75,78,81,82,84,86,88,90,92,94,95]
       }, {
           type: "line",
           name: 'DBP',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(localStorage.eg) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseInt(document.getElementById("dbp").value),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
    $('#popupGenerico').modal('show')
});
$( '#graficoCc' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico CC");
    $('#popupBody').html("<div id='graficoCcView'></div>");
    $('#graficoCcView').highcharts({
       title: {
           text: 'CC',
           x: -20
       },
       subtitle: {
           text: 'Milimetros (mm)',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [30, 72, 114, 156, 198, 240, 282, 324, 366, 408]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: 'Pct. 3',
           marker: {enabled: false},
           data: [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
       }, {
           type: "line",
           name: 'Pct. 97',
           marker: {enabled: false},
           data: [90,100,111,124,136,150,165,179,193,206,219,232,243,256,268,279,290,300,310,319,328,336,343,351,358,363,368,373,377]
       }, {
           type: "line",
           name: 'CC',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(localStorage.eg) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseInt(document.getElementById("cc").value),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
    $('#popupGenerico').modal('show')
});
$( '#graficoCa' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico CA");
    $('#popupBody').html("<div id='graficoCaView'></div>");
    $('#graficoCaView').highcharts({
       title: {
           text: 'CA**',
           x: -20
       },
       subtitle: {
           text: 'Milimetros (mm)',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [20, 60, 100, 140, 180, 220, 260, 300, 340, 400]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: { enabled: false },
       series: [{
           type: "line",
           name: 'Pct. 3',
           marker: { enabled: false },
           data: [40,50,60,72,84,97,107,119,131,141,151,161,171,181,191,200,209,218,227,236,245,253,261,269,277,285,292,299,307]
       }, {
           type: "line",
           name: 'Pct 97',
           marker: { enabled: false },
           data: [68,78,88,101,112,127,141,155,168,183,196,209,223,235,248,260,271,284,295,306,318,329,339,349,359,370,380,389,399]
       }, {
           type: "line",
           name: 'CA',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(localStorage.eg) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseInt(document.getElementById("ca").value),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
    $('#popupGenerico').modal('show')
});
$( '#graficoLf' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico LF");
    $('#popupBody').html("<div id='graficoLfView'></div>");
    $('#graficoLfView').highcharts({
       title: {
           text: 'LF',
           x: -20
       },
       subtitle: {
           text: 'Milimetros (mm)',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: { enabled: false },
       series: [{
           type: "line",
           name: 'Pct. 3',
           marker: { enabled: false },
           data: [6,9,12,14,17,20,22,25,27,30,32,35,37,40,42,45,47,49,52,54,56,58,59,61,62,64,65,66,67]
       }, {
           type: "line",
           name: 'Pct. 97',
           marker: { enabled: false },
           data: [12,15,18,21,24,28,31,34,38,41,44,47,50,53,55,57,60,62,65,67,70,71,73,75,77,79,80,81,82]
       }, {
           type: "line",
           name: 'LF',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(localStorage.eg) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({ y: 0, });
               }
               data.push({
                   y: parseInt(document.getElementById("lf").value),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
    $('#popupGenerico').modal('show')
});
$( '#graficoLh' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico LH");
    $('#popupBody').html("<div id='graficoLhView'></div>");
    $('#graficoLhView').highcharts({
            title: {
                text: 'Largo Humeral',
                x: -20
            },
            subtitle: {
                text: 'Milimetros (mm)',
                x: -20
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: { text: 'Milimetros (mm)' },
                tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: { enabled: false },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: { enabled: false },
                data: [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: { enabled: false },
                data: [12.3, 15.1, 17.9, 20.7, 23.5, 26.3, 29.1, 31.6, 34.2, 36.7, 39.2, 41.6, 43.9, 46.1, 48.1, 50.1, 52.1, 53.9, 55.6, 57.3, 58.9, 60.5, 62.1, 63.5, 64.9, 66.4, 67.8, 69.3, 70.8]
            }, {
                type: "line",
                name: 'Humero',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 12; i <= edadGest; i++) {
                        data.push({ y: 0, });
                    }
                    data.push({
                        y: parseInt(document.getElementById("lh").value),
                    });
                    for (i = edadGest + 1; i <= 39; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
        });
    $('#popupGenerico').modal('show')
});
$( '#graficoCerebelo' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Cerebelo");
    $('#popupBody').html("<div id='graficoCerebeloView'></div>");
    $('#graficoCerebeloView').highcharts({
            title: {
                text: 'Diámetro de Cerebelo',
                x: -20
            },
            subtitle: {
                text: 'Milimetros (mm)',
                x: -20
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: { text: 'Milimetros (mm)' },
                tickPositions: [5, 10,20,30,40,50,60,70]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: {enabled: false},
            series: [{
                type: "line",
                name: '-2DE',
                marker: {enabled: false},
                data: [12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 29, 30, 31, 33, 36, 37, 38, 40, 40, 40, 41, 42, 44]
            }, {
                type: "line",
                name: 'media',
                marker: {enabled: false},
                data: [15, 16, 17, 18, 20, 20, 22, 23, 24, 26, 28, 30, 31, 33, 34, 37, 39, 41, 43, 46, 47, 49, 51, 51, 52, 52]
            }, {
                type: "line",
                name: '+2DE',
                marker: {enabled: false},
                data: [18, 18, 19, 20, 22, 23, 25, 26, 27, 30, 32, 34, 34, 37, 38, 41, 43, 46, 48, 53, 56, 58, 60, 62, 62, 62]
            }, {
                type: "line",
                name: 'Cerebelo',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 15; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseInt(document.getElementById("cerebelo").value),
                    });
                    for (i = edadGest + 1; i <= 39; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
        });
    $('#popupGenerico').modal('show');
});

$( '#graficoLcn' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico LCN");
    $('#popupBody').html("<div id='graficoLcnView'></div>");
    $('#graficoLcnView').highcharts({
        title: {
            text: 'LCN',
            x: -20 //center
        },
        xAxis: {
            categories: ['6', '7', '8', '9', '10',  '11', '12', '13', '14', '15']
        },
        yAxis: {
            title: {
                text: 'Milimetros (mm)'
            },
            tickPositions: [0.2, 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 11]
        },
        credits: {enabled:false},
        colors: ['#313131', '#313131', '#313131'],
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
         },
        series: [{
            name: '(-) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.26, 0.77, 1.4, 2.05, 2.75,3.65, 4.64, 5.82, 7.1, 8.02],
            dashStyle: 'shortdot'
        }, {
            name: 'Media',
            type: "line",
            marker: { enabled: false },
            data: [0.38, 0.89, 1.54, 2.25, 3.05,4.05, 5.29, 6.65, 7.98, 9.01]
        }, {
            name: '(+) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.53, 1.04, 1.71, 2.49, 3.42,4.64, 6.12, 7.67, 9.01, 10.01],
            dashStyle: 'shortdot'
        }, {
            type: "line",
            name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {

                // generate an array of random data
                var data = [];
                var egLcn = parseInt(localStorage.eg);
                var valLcn = parseFloat(document.getElementById("lcn").value) / 10;
                var lcnegx = [];
                var flag = false;

                lcnegx[1] = 6;
                lcnegx[2] = 7;
                lcnegx[3] = 8;
                lcnegx[4] = 9;
                lcnegx[5] = 10;
                lcnegx[6] = 11;
                lcnegx[7] = 12;
                lcnegx[8] = 13;
                lcnegx[9] = 14;
                lcnegx[10] = 14;

                for (i = 1; i <= 10; i++) {
                    if (lcnegx[i] >= egLcn) {
                        if (flag == false) {
                        data.push({
                            y: valLcn,
                        });
                        flag = true;
                        }
                        else {
                         data.push({
                            y:0,
                         });
                        }
                    }
                    else {
                        data.push({
                            y: 0,
                        });
                    }
                }
                return data;
            }())
        }]
      });
    $('#popupGenerico').modal('show');
});
