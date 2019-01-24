$(document).ready(function(){
$( '#graficoDbp' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico DBP");
    $('#graficosBody').html("<div id='graficoDbpView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
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
           name: '(-) 2DE',
           marker: {enabled: false},
           data: [14,17,19,25,29,33,34,38,41,43,46,49,52,54,57,61,63,65,69,69,74,74,77,78,80,83,85,87]
       }, {
           type: "line",
           name: 'DE',
           marker: { enabled: false },
           data: [20,23,26,30,35,38,40,44,46,49,52,56,59,62,64,68,70,73,76,78,81,83,85,86,87,90,91,94]
       }, {
            type: "line",
            name: '(+) 2DE',
            marker: { enabled: false },
            data: [25,29,33,35,41,42,46,50,52,56,59,63,66,70,71,75,77,81,83,87,88,91,94,95,97,99,102,104]        
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
               var dbp = $("#dbp").val();
               dbp = dbp.toString();
               dbp = dbp.replace(",", ".");
               dbp = parseFloat(dbp);
                   
               data.push({
                   y: dbp,
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
    $('#popupGraficos').modal('show')
});
$( '#graficoCc' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico CC");
    $('#graficosBody').html("<div id='graficoCcView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoCcView').highcharts({
       title: {
           text: 'Circunferencia de Cráneo',
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

               var cc = $("#cc").val();
               cc = cc.toString();
               cc = cc.replace(",", ".");
               cc = parseFloat(cc);

               data.push({
                   y: cc,
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
    $('#popupGraficos').modal('show')
});
$( '#graficoCa' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico CA");
    $('#graficosBody').html("<div id='graficoCaView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
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

               var ca = $("#ca").val();
               ca = ca.toString();
               ca = ca.replace(",", ".");
               ca = parseFloat(ca);

               data.push({
                   y:ca,
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
    $('#popupGraficos').modal('show')
});
$( '#graficoLf' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico LF");
    $('#graficosBody').html("<div id='graficoLfView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoLfView').highcharts({
       title: {
           text: 'Largo Femoral',
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
               
               var lf = $("#lf").val();
               lf = lf.toString();
               lf = lf.replace(",", ".");
               lf = parseFloat(lf);
               data.push({
                   y: lf,
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
    $('#popupGraficos').modal('show')
});
$( '#graficoLh' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico LH");
    $('#graficosBody').html("<div id='graficoLhView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
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
 
                    var lh = $("#lh").val();
                    lh = lh.toString();
                    lh = lh.replace(",", ".");
                    lh = parseFloat(lh);
                        
                    data.push({
                        y: lh,
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
    $('#popupGraficos').modal('show')
});
$( '#graficoCerebelo' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Cerebelo");
    $('#graficosBody').html("<div id='graficoCerebeloView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
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

                   var cerebelo = $("#cerebelo").val();
                   cerebelo = cerebelo.toString();
                   cerebelo = cerebelo.replace(",", ".");
                   cerebelo = parseFloat(cerebelo);

                    data.push({
                        y: cerebelo,
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
    $('#popupGraficos').modal('show');
});

$( '#graficoLcn' ).on( 'click', function() {
    $('#graficosTitle').html('<i class="fa fa-square" aria-hidden="true"></i> Longitud Cefalo Nalgas (LCN) en milimetros');
    $('#graficosBody').html("<div class='row'><div class='col'><div id='graficoLcnBaseView'></div></div></div>");
        
    var egLcn = parseFloat($("input[name='eg']").val());
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    
    $('#graficoLcnBaseView').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        xAxis: {
            categories: ['6', '7', '8', '9', '10',  '11', '12', '13', '14', '15']
        },
        yAxis: {
            title: {
                text: 'milimetros (mm)'
            },
            tickPositions: [2, 11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
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
            data: [2.6, 7.7, 14, 20.5, 26.2,35.5, 46.8, 58.2, 69.8, 80.2],
            dashStyle: 'shortdot'
        }, {
            name: 'Media',
            type: "line",
            marker: { enabled: false },
            data: [3.8, 8.9, 15.4, 22.5, 29.5,40.5, 52.9, 66.5, 79.0, 90.1]
        }, {
            name: '(+) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [5.3, 10.4, 17.1, 24.9, 33.2,46.4, 60.8, 75.7, 89.1, 100.1],
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
                var egLcn2 = parseInt(localStorage.eg);
                var lcn = $("#lcn").val();
                lcn = lcn.toString();
                lcn = lcn.replace(",", ".");
                lcn = parseFloat(lcn);

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
                    if (lcnegx[i] >= egLcn2) {
                        if (flag == false) {
                        data.push({
                            y: lcn,
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

    $('#popupGraficos').modal('show');
});

$( '#graficoLcnDos' ).on( 'click', function() {
    $('#graficosTitle').html('<i class="fa fa-square" aria-hidden="true"></i> Longitud Cefalo Nalgas (LCN) en milimetros');
    $('#graficosBody').html("<div class='row'><div class='col'><div id='graficoLcnBaseView'></div></div></div>");
        
    var egLcn = parseFloat($("input[name='eg']").val());
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    
    let args = {
		action: "get",
		temporal_id: $("#id-paciente").val()
	}

	$.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(respuesta){
		if (Object.keys(respuesta).length > 0) {
            $('#graficoLcnBaseView').highcharts({
                title: {
                    text: '',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['6', '7', '8', '9', '10',  '11', '12', '13', '14', '15']
                },
                yAxis: {
                    title: {
                        text: 'milimetros (mm)'
                    },
                    tickPositions: [2, 11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
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
                    data: [2.6, 7.7, 14, 20.5, 26.2,35.5, 46.8, 58.2, 69.8, 80.2],
                    dashStyle: 'shortdot'
                }, {
                    name: 'Media',
                    type: "line",
                    marker: { enabled: false },
                    data: [3.8, 8.9, 15.4, 22.5, 29.5,40.5, 52.9, 66.5, 79.0, 90.1]
                }, {
                    name: '(+) 2DE',
                    type: "line",
                    marker: { enabled: false },
                    data: [5.3, 10.4, 17.1, 24.9, 33.2,46.4, 60.8, 75.7, 89.1, 100.1],
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
                        lcnegx[10] = 15;
                        for (i = 1; i <= 10; i++) {
                            flag = false;
                            $.each(respuesta, function(X,val){

                                var eG = val.temptable_eg;
                                eG = eG.toString();
                                eG = eG.replace(",", ".");
                                eG = parseFloat(eG);

                                if (lcnegx[i] == Math.trunc(eG,)) {
                                    var lcn = val.temptable_lcn;
                                    lcn = lcn.toString();
                                    lcn = lcn.replace(",", ".");
                                    lcn = parseFloat(lcn);
                                        
                                    data.push({
                                        y: lcn,
                                    });
                                    flag = true;
                                }
                            })

                            if (flag == false) {
                                data.push({
                                    y:0,
                                });
                            }
                        }
                        return data;
                    }())
                }]
            });
        }
        $('#popupGraficos').modal('show');
    });


});

$( '#graficoSaco' ).on( 'click', function() {
    $('#graficosTitle').html('<i class="fa fa-square" aria-hidden="true"></i> Saco Gestacional promedio en milímetros (mm)');
    $('#graficosBody').html("<div id='graficoSacoView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoSacoView').highcharts({
             title: {
                 text: '',
                 x: -20
             },
             subtitle: {
                 text: '',
                 x: -20
             },
             plotOptions: {
                 series: {
                     enableMouseTracking: false
                 }
             },
             yAxis: {
                 title: { text: '' },
                 tickPositions: [0, 5, 10, 15, 20, 25, 30, 35, 40]
             },
             colors: ['#313131', '#313131', '#313131'],
             xAxis: {
                 categories:['4.2','4.3','4.4','4.5','4.6','5','5.1','5.2','5.3','5.4','5.5','5.6','6','6.1','6.2','6.3','6.4','6.5','6.6','7','7.1','7.2','7.3','7.4','7.5','7.6','8']
             },
             credits: { enabled: false },
             series: [{
                 type: "line",
                 name: '-DE',
                 marker: { enabled: false },
                 data: [0.12,1.01,1.45,2.14,2.93,4.1,5.1,6.1,7,8,9,9.9,10.7,11.5,12.2,13.3,13.9,14.9,15.9,16.7,17.6,18.6,19.4,20.4,21,22,23],
                 dashStyle: 'shortdot'
             },{
                 type: "line",
                 name: 'media',
                 marker: { enabled: false },
                 data: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19.9,20.9,21.8,22.9,24.1,25,26,27,28,29,30]
             },{
                 type: "line",
                 name: '+DE',
                 marker: { enabled: false },
                 data: [9.9,10.9,11.6,12.6,13.6,15.1,16,17,18,19,19.9,21.1,21.9,22.9,24.1,25.1,26.1,27,28,29,30,31,32,33,34,35,36],
                 dashStyle: 'shortdot'
             }, {
                 type: "line",
                 name: 'Saco gestacional [Hellmann y col. Am. J O & G 1968; 1.03(6)789 800]',
                 dashStyle: "Dot",
                 marker: { symbol: 'square' },
                 lineWidth: 0,
                 data: (function () {
                    var data = [];
                    var categories = [4.2,4.3,4.4,4.5,4.6,5,5.1,5.2,5.3,5.4,5.5,5.6,6,6.1,6.2,6.3,6.4,6.5,6.6,7,7.1,7.2,7.3,7.4,7.5,7.6,8];
                    var edadGest = parseInt(localStorage.eg);

                    var saco = $("#saco").val();
                    saco = saco.toString();
                    saco = saco.replace(",", ".");
                    saco = parseFloat(saco);
                    
                    for (i = 0; i <= 27; i++) {

                        if (categories[i] == edadGest){
                             data.push({
                                  y: saco,
                             });
                        }
                        else{
                             data.push({ y: -2, });
                        }
                    }
                    return data;
                 }())
             }]
         });
    $('#popupGraficos').modal('show');
});


$( '#graficoSacoDos' ).on( 'click', function() {
    $('#graficosTitle').html('<i class="fa fa-square" aria-hidden="true"></i> Saco Gestacional promedio en milímetros (mm)');
    $('#graficosBody').html("<div id='graficoSacoView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();

    let args = {
		action: "get",
		temporal_id: $("#id-paciente").val()
	}

	$.post("https://pacientes.crecimientofetal.cl/temporal/primer", args).done(function(respuesta){
		if (Object.keys(respuesta).length > 0) {
            $('#graficoSacoView').highcharts({
             title: {
                 text: '',
                 x: -20
             },
             subtitle: {
                 text: '',
                 x: -20
             },
             plotOptions: {
                 series: {
                     enableMouseTracking: false
                 }
             },
             yAxis: {
                 title: { text: '' },
                 tickPositions: [0, 5, 10, 15, 20, 25, 30, 35, 40]
             },
             colors: ['#313131', '#313131', '#313131'],
             xAxis: {
                 categories:['4.2','4.3','4.4','4.5','4.6','5','5.1','5.2','5.3','5.4','5.5','5.6','6','6.1','6.2','6.3','6.4','6.5','6.6','7','7.1','7.2','7.3','7.4','7.5','7.6','8']
             },
             credits: { enabled: false },
             series: [{
                 type: "line",
                 name: '-DE',
                 marker: { enabled: false },
                 data: [0.12,1.01,1.45,2.14,2.93,4.1,5.1,6.1,7,8,9,9.9,10.7,11.5,12.2,13.3,13.9,14.9,15.9,16.7,17.6,18.6,19.4,20.4,21,22,23],
                 dashStyle: 'shortdot'
             },{
                 type: "line",
                 name: 'media',
                 marker: { enabled: false },
                 data: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19.9,20.9,21.8,22.9,24.1,25,26,27,28,29,30]
             },{
                 type: "line",
                 name: '+DE',
                 marker: { enabled: false },
                 data: [9.9,10.9,11.6,12.6,13.6,15.1,16,17,18,19,19.9,21.1,21.9,22.9,24.1,25.1,26.1,27,28,29,30,31,32,33,34,35,36],
                 dashStyle: 'shortdot'
             }, {
                 type: "line",
                 name: 'Saco gestacional [Hellmann y col. Am. J O & G 1968; 1.03(6)789 800]',
                 dashStyle: "Dot",
                 marker: { symbol: 'square' },
                 lineWidth: 0,
                 data: (function () {
                    var data = [];
                    var categories = [4.2,4.3,4.4,4.5,4.6,5,5.1,5.2,5.3,5.4,5.5,5.6,6,6.1,6.2,6.3,6.4,6.5,6.6,7,7.1,7.2,7.3,7.4,7.5,7.6,8];
                    for (i = 0; i <= 27; i++) {
                        flag = false;
                        $.each(respuesta, function(X,val){

                            var eG = val.temptable_eg;
                            eG = eG.toString();
                            eG = eG.replace(",", ".");
                            eG = parseFloat(eG);

                            if (categories[i] == Math.trunc(eG,)) {
                                var saco = val.temptable_saco;
                                saco = saco.toString();
                                saco = saco.replace(",", ".");
                                saco = parseFloat(saco);
                                    
                                data.push({
                                    y: saco,
                                });
                                flag = true;
                            }
                        });

                        if (flag == false) {
                            data.push({
                                y:0,
                            });
                        }
                    }
                    return data;
                }())
                }]
            });
            $('#popupGraficos').modal('show');
        }
    });
});

$( '#graficoAud' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Arteria Uterina Derecha");
    $('#graficosBody').html("<div id='graficoArtUtDerView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoArtUtDerView').highcharts({
        title: {
            text: 'IP Arterias Uterinas Derecha',
            x: -20,
                style: {
            fontSize: '10px'
        }
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'Valor IP' },
            tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'] 
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 5',
            marker: { enabled: false },
            data: [1.23,1.18,1.11,1.05,0.99,0.94,0.89,0.85,0.81,0.78,0.74,0.71,0.69,0.66,0.64,0.62,0.6,0.58,0.56,0.55,0.54,0.52,0.51,0.51,0.51,0.49,0.48,0.48,0.47,0.47,0.47]
        }, {
            type: "line",
            name: 'Pct. 95',
            marker: { enabled: false },
            data: [2.84,2.71,2.53,2.38,2.24,2.11,1.99,1.88,1.79,1.71,1.61,1.54,1.47,1.41,1.35,1.3,1.25,1.21,1.17,1.13,1.11,1.06,1.04,1.01,0.99,0.97,0.95,0.94,0.92,0.91,0.91]
        }, {
            type: "line",
                name: 'Arteria Promedio',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
            data: (function () {
                    // generate an array of random data
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 10; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    var aud = $("#aud").val();
                    aud = aud.toString();
                    aud = aud.replace(",", ".");
                    aud = parseFloat(aud);
                    
                    data.push({
                            y: aud,
                        });
                    for (i = edadGest +1; i <= 39; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
    });
    $('#popupGraficos').modal('show');
});

$( '#graficoAui' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Arteria Uterina Izquierda");
    $('#graficosBody').html("<div id='graficoArtUtIzqView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoArtUtIzqView').highcharts({
        title: {
            text: 'IP Arterias Uterinas Izquierda',
            x: -20,
                style: {
            fontSize: '10px'
        }
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'Valor IP' },
            tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'] 
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 5',
            marker: { enabled: false },
            data: [1.23,1.18,1.11,1.05,0.99,0.94,0.89,0.85,0.81,0.78,0.74,0.71,0.69,0.66,0.64,0.62,0.6,0.58,0.56,0.55,0.54,0.52,0.51,0.51,0.51,0.49,0.48,0.48,0.47,0.47,0.47]
        }, {
            type: "line",
            name: 'Pct. 95',
            marker: { enabled: false },
            data: [2.84,2.71,2.53,2.38,2.24,2.11,1.99,1.88,1.79,1.71,1.61,1.54,1.47,1.41,1.35,1.3,1.25,1.21,1.17,1.13,1.11,1.06,1.04,1.01,0.99,0.97,0.95,0.94,0.92,0.91,0.91]
        }, {
            type: "line",
                name: 'Arteria Promedio',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
            data: (function () {
                    // generate an array of random data
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 10; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    
                    var aui = $("#aui").val();
                    aui = aui.toString();
                    aui = aui.replace(",", ".");
                    aui = parseFloat(aui);
                    
                    data.push({
                            y: aui,
                        });
                    for (i = edadGest +1; i <= 39; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
    });
    $('#popupGraficos').modal('show');
});

$( '#graficoAu' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Promedio Arteria Uterinas");
    $('#graficosBody').html("<div id='graficoArtUtView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoArtUtView').highcharts({
        title: {
            text: 'IP Promedio Arteria Uterinas',
            x: -20,
                style: {
            fontSize: '10px'
        }
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'Valor IP' },
            tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'] 
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 5',
            marker: { enabled: false },
            data: [1.23,1.18,1.11,1.05,0.99,0.94,0.89,0.85,0.81,0.78,0.74,0.71,0.69,0.66,0.64,0.62,0.6,0.58,0.56,0.55,0.54,0.52,0.51,0.51,0.51,0.49,0.48,0.48,0.47,0.47,0.47]
        }, {
            type: "line",
            name: 'Pct. 95',
            marker: { enabled: false },
            data: [2.84,2.71,2.53,2.38,2.24,2.11,1.99,1.88,1.79,1.71,1.61,1.54,1.47,1.41,1.35,1.3,1.25,1.21,1.17,1.13,1.11,1.06,1.04,1.01,0.99,0.97,0.95,0.94,0.92,0.91,0.91]
        }, {
            type: "line",
                name: 'Arteria Promedio',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
            data: (function () {
                    // generate an array of random data
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 10; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    var auprom = $("#auprom").val();
                    auprom = auprom.toString();
                    auprom = auprom.replace(",", ".");
                    auprom = parseFloat(auprom);
                    
                    data.push({
                            y: auprom,
                        });
                    for (i = edadGest +1; i <= 39; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
    });
    $('#popupGraficos').modal('show');
});

$( '#graficoIpau' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico IP Arteria Umbilical");
    $('#graficosBody').html("<div id='graficoIpauView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoIpauView').highcharts({
         title: {
             text: 'IP Arteria Umbilical **',
             x: -20, //center
                 style: {
            fontSize: '10px'
        }
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor IP' },
             tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories:['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: 'Pct. 5',
             marker: { enabled: false },
             data: [0.97,0.95,0.94,0.92,0.9,0.89,0.87,0.85,0.82,0.8,0.78,0.75,0.73,0.7,0.67,0.65,0.62,0.58,0.55,0.52,0.49]
         }, {
             type: "line",
             name: 'Pct. 95',
             marker: { enabled: false },
             data: [1.6,1.56,1.53,1.5,1.46,1.43,1.4,1.37,1.35,1.32,1.29,1.27,1.25,1.22,1.2,1.18,1.16,1.14,1.13,1.11,1.09]
         }, {
             type: "line",
             name: 'Arteria',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 var ipau = $("#ipau").val();
                 ipau = ipau.toString();
                 ipau = ipau.replace(",", ".");
                 ipau = parseFloat(ipau);
                 
                 data.push({
                     y: ipau,
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
    $('#popupGraficos').modal('show');
});

$( '#graficoIpacm' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico IP Arteria C. Media");
    $('#graficosBody').html("<div id='graficoIpacmView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoIpacmView').highcharts({
        title: {
             text: 'IP Arteria Cerebral Media **',
             x: -20,
                style: {
            fontSize: '10px'
        }
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor IP' },
             tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories: ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         credits: {
             enabled: false
         },
         series: [{
             type: "line",
             name: 'Pct. 5',
             marker: { enabled: false },
             data: [1.24,1.29,1.34,1.37,1.4,1.43,1.44,1.45,1.45,1.44,1.43,1.41,1.38,1.34,1.3,1.25,1.19,1.13,1.05,0.98,0.89]
         }, {
             type: "line",
             name: 'Pct. 95',
             marker: { enabled: false },
             data: [1.98,2.12,2.25,2.36,2.45,2.53,2.59,2.63,2.66,2.67,2.67,2.65,2.62,2.56,2.5,2.41,2.31,2.2,2.07,1.92,1.76]
         }, {
             type: "line",
             name: 'Arteria',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                     
                 var ipacm = $("#ipacm").val();
                 ipacm = ipacm.toString();
                 ipacm = ipacm.replace(",", ".");
                 ipacm = parseFloat(ipacm);
                     
                 data.push({
                     y: ipacm,
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
    $('#popupGraficos').modal('show');
});

$( '#graficoCcp' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Cuociente Cerebro Placentario");
    $('#graficosBody').html("<div id='graficoCcpView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoCcpView').highcharts({
         title: {
             text: 'IP de CCP (Indice ACM / AU) **',
             x: -20 //center
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor IP' },
             tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories:
             ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
         },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: 'Pct. 5',
             marker: { enabled: false },
             data: [0.78,0.87,0.95,1.02,1.09,1.15,1.2,1.24,1.28,1.31,1.33,1.35,1.36,1.36,1.36,1.34,1.32,1.3,1.26,1.22,1.18]
         }, {
             type: "line",
             name: 'Pct. 95',
             marker: { enabled: false },
             data: [1.68,1.88,2.06,2.22,2.36,2.49,2.6,2.7,2.78,2.84,2.89,2.92,2.93,2.93,2.91,2.87,2.82,2.75,2.67,2.57,2.45]
         }, {
             type: "line",
             name: 'Cuociente',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 // generate an array of random data
                 var data = [];
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 var ccp = $("#ccp").val();
                 ccp = ccp.toString();
                 ccp = ccp.replace(",", ".");
                 ccp = parseFloat(ccp);
                 
                 data.push({
                     y: ccp,
                 });
                 for (i = edadGest + 1; i <= 38; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
    });
    $('#popupGraficos').modal('show');
});

$( '#graficoDv' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Ductus Venoso");
    $('#graficosBody').html("<div id='graficoDvView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoDvView').highcharts({
        title: {
            text: 'Ductus Venoso',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'Valor IP' },
            tickPositions: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: 
            ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 5',
            marker: { enabled: false },
            data: [0.32,0.32,0.32,0.32,0.32,0.32,0.31,0.31,0.31,0.3,0.29,0.28,0.28,0.27,0.26,0.25,0.24,0.23,0.22,0.21,0.2]
        }, {
            type: "line",
            name: 'Pct. 95',
            marker: { enabled: false },
            data: [0.83,0.83,0.83,0.83,0.83,0.83,0.82,0.82,0.81,0.81,0.8,0.79,0.78,0.77,0.76,0.75,0.74,0.73,0.72,0.71,0.7]
        }, {
            type: "line",
                name: 'Ductus Venoso',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
            data: (function () {
                    // generate an array of random data
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 20; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    var dv = $("#dv").val();
                    dv = dv.toString();
                    dv = dv.replace(",", ".");
                    dv = parseFloat(dv);
                    
                    data.push({
                            y: dv,
                        });
                    for (i = edadGest +1; i <= 39; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
    });
    $('#popupGraficos').modal('show');
});

$( '#graficoPFE' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Peso Fetal Estimado");
    $('#graficosBody').html("<div id='graficoPesoView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoPesoView').highcharts({
       title: {
           text: 'Peso Fetal Estimado *',
           x: -20 //center
       },
       subtitle: {
           text: 'Kilogramos',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false,
               pointInterval: 1
           }
       },
       yAxis: {
           title: { text: 'Kilogramos' },
           tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: 'Pct 3',
           dashStyle: "Dot",
           marker: {enabled: false},
           data: [110,136,167,205,248,299,359,426,503,589,685,791,908,1034,1169,1313,1465,1622,1783,1946,2110,2271,2427,2576,2714]
       }, {
           type: "line",
           name: 'Pct 10',
           marker: { enabled: false },
           data: [121,150,185,227,275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985]
       }, {
           type: "line",
           name: 'Pct 90',
           marker: { enabled: false },
           data: [171,212,261,319,387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234]
       }, {
           type: "line",
           name: 'Pct 97',
           dashStyle: "Dot",
           marker: { enabled: false, },
           data: [183,226,279,341,414,499,598,710,838,981,1141,1319,1513,1724,1949,2189,2441,2703,2971,3244,3516,3785,4045,4294,4474]
       }, {
           type: "line",
           name: 'Peso',
           dashStyle: "Dot",
           marker: {symbol:'square'},
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(localStorage.eg) -1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseFloat($('#pfe').val()),
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
    $('#popupGraficos').modal('show');
});

$( '#graficoCCCA' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Relación Cráneo Abdómen (CC/CA)");
    $('#graficosBody').html("<div id='graficoCCCAView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoCCCAView').highcharts({
       title: {
           text: 'Cc / Ca *',
           x: -20 //center
       },
       subtitle: {
           text: '',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Valor cuociente' },
           tickPositions: [0.75, 0.82, 0.88, 0.95, 1, 1.07, 1.14, 1.2, 1.27, 1.33]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
       },
       credits: { enabled: false },
       series: [{
           type: "line",
           name: 'Pct. 3',
           marker: { enabled: false },
           data: [1.1,1.09,1.08,1.07,1.06,1.06,1.05,1.04,1.03,1.02,1.01,1,1,0.99,0.98,0.97,0.96,0.95,0.95,0.94,0.93,0.92,0.91,0.9,0.89,0.89]
       }, {
           type: "line",
           name: 'Pct. 97',
           marker: { enabled: false },
           data: [1.29,1.28,1.27,1.26,1.25,1.24,1.24,1.23,1.22,1.21,1.2,1.19,1.18,1.18,1.17,1.17,1.16,1.15,1.14,1.13,1.12,1.11,1.1,1.09,1.08,1.08]
       }, {
           type: "line",
           name: 'CC/CA',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(localStorage.eg) -1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseFloat($('#ccca').val()),
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
    $('#popupGraficos').modal('show');
});

$( '#infDoppler1' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfica para evaluación de la flujometría doppler materno fetal básica");
    $( '#impDoppler1').remove();
    $( '#infecoObsSegTrim1Clon').remove();
    $('#graficosFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler1'>Ver Impresion</button>");
    var stringGraficos = "<h4 class='text-center d-none mt-2'>Gráfica para evaluación de la flujometría doppler materno fetal básica</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none'></span><div class='row d-none mt-2'> <div class='col-5'><p style='font-size:10px;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE </p></div><div class='col-3'><p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'><p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><div class='row'><div class='col'><div id='graficoIpArtUtView'></div></div><div class='col'><div id='graficoIpArtUmbView'></div></div></div><div class='row'><div class='col'><div id='graficoIpArtCMView'></div></div><div class='col'><div id='graficoIpCCPView'></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:12px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Referencia para Doppler promedio de arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32<br>** Referencia para Doppler de arteria umbilical, C Media y CCP Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127<br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
    var comentarios = $("#comentarios-doppler").val();

    var paciente = $( '#nombre-paciente').val();
    var idpaciente = $( '#id-paciente').val();
    var fexamen = $( "input[name='fee']").val();
    var ecografista = $( '#ecografista option:selected').text();
    stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
    stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
    stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
    stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);
	
    if(typeof comentarios == 'undefined'){
	if ($('#auprom').val() > 0){
		comentarios = 'F. Doppler materno (promedio uterinas), IP percentil ' + $('#auPctTxt').val() + '<br />';
	}
	if ($('#ipau').val() > 0){
		comentarios = comentarios + 'F. Doppler fetal, IP de CCP percentil ' + $('#ccpPctTxt').val() + '<br />';
     	}
    }
    else{
	    comentarios = $("#comentarios-doppler").val().replace(/\r\n|\r|\n/g,"<br />");
    }
    stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);
        
    $('#graficosBody').html(stringGraficos);
    $( '#impDoppler1').on("click", function(){
      imprSelec("graficosBody");
    });
    $( '#impEcoObsSegTrim2').remove();
    $( '#impEcoObsSegTrim1').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    //$('#graficoIpArtUtView').highcharts({
    graficoUno = Highcharts.chart('graficoIpArtUtView', {
            chart: {
            height: 250
        },
        title: {
            text: 'IP Promedio Arteria Uterinas *',
            x: -20,
                 style: {
            fontSize: '14px'
        }
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
        yAxis: {
            title: { text: 'Valor IP' },
            tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'] 
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 5',
            marker: { enabled: false },
            data: [1.23,1.18,1.11,1.05,0.99,0.94,0.89,0.85,0.81,0.78,0.74,0.71,0.69,0.66,0.64,0.62,0.6,0.58,0.56,0.55,0.54,0.52,0.51,0.51,0.51,0.49,0.48,0.48,0.47,0.47,0.47]
        }, {
            type: "line",
            name: 'Pct. 95',
            marker: { enabled: false },
            data: [2.84,2.71,2.53,2.38,2.24,2.11,1.99,1.88,1.79,1.71,1.61,1.54,1.47,1.41,1.35,1.3,1.25,1.21,1.17,1.13,1.11,1.06,1.04,1.01,0.99,0.97,0.95,0.94,0.92,0.91,0.91]
        }, {
            type: "line",
                name: 'Promedio Uterinas',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
            data: (function () {
                    // generate an array of random data
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 10; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    
                    var auprom = $("#auprom").val();
                    auprom = auprom.toString();
                    auprom = auprom.replace(",", ".");
                    auprom = parseFloat(auprom);
                    
                    data.push({
                            y: auprom,
                        });
                    for (i = edadGest +1; i <= 39; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
    });
    
    //$('#graficoIpArtUmbView').highcharts({
    graficoDos = Highcharts.chart('graficoIpArtUmbView', {
            chart: {
            height: 250
        },
         title: {
             text: 'IP Arteria Umbilical **',
             x: -20, //center
                  style: {
            fontSize: '14px'
        }
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor IP' },
             tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories:['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: 'Pct. 5',
                 dashStyle: "Dot",
             marker: { enabled: false },
             data: [0.97,0.95,0.94,0.92,0.9,0.89,0.87,0.85,0.82,0.8,0.78,0.75,0.73,0.7,0.67,0.65,0.62,0.58,0.55,0.52,0.49]
         }, {
             type: "line",
             name: 'Pct. 95',
                 dashStyle: "Dot",
             marker: { enabled: false },
             data: [1.6,1.56,1.53,1.5,1.46,1.43,1.4,1.37,1.35,1.32,1.29,1.27,1.25,1.22,1.2,1.18,1.16,1.14,1.13,1.11,1.09]
         }, {
             type: "line",
             name: 'Arteria Umbilical',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 var ipau = $("#ipau").val();
                 ipau = ipau.toString();
                 ipau = ipau.replace(",", ".");
                 ipau = parseFloat(ipau);
                 
                 data.push({
                     y: ipau,
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
    //$('#graficoIpArtCMView').highcharts({
    graficoTres = Highcharts.chart('graficoIpArtCMView', {
            chart: {
            height: 250
        },
        title: {
             text: 'IP Arteria Cerebral Media **',
             x: -20,
                 style: {
            fontSize: '14px'
        }
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor IP' },
             tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories: ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
         credits: {
             enabled: false
         },
         series: [{
             type: "line",
             name: 'Pct. 5',
                 dashStyle: "Dot",
             marker: { enabled: false },
             data: [1.24,1.29,1.34,1.37,1.4,1.43,1.44,1.45,1.45,1.44,1.43,1.41,1.38,1.34,1.3,1.25,1.19,1.13,1.05,0.98,0.89]
         }, {
             type: "line",
             name: 'Pct. 95',
                 dashStyle: "Dot",
             marker: { enabled: false },
             data: [1.98,2.12,2.25,2.36,2.45,2.53,2.59,2.63,2.66,2.67,2.67,2.65,2.62,2.56,2.5,2.41,2.31,2.2,2.07,1.92,1.76]
         }, {
             type: "line",
             name: 'Arteria C. Media',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }

                 var ipacm = $("#ipacm").val();
                 ipacm = ipacm.toString();
                 ipacm = ipacm.replace(",", ".");
                 ipacm = parseFloat(ipacm);

                 data.push({
                     y: ipacm,
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
    //$('#graficoIpCCPView').highcharts({
    graficoCuatro = Highcharts.chart('graficoIpCCPView', {
            chart: {
            height: 250
        },
         title: {
             text: 'IP de CCP (Indice ACM / AU) **',
             x: -20, //center
                  style: {
            fontSize: '14px'
        }
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor IP' },
             tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
         },
         legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories:
             ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
         },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: 'Pct. 5',
             marker: { enabled: false },
             data: [0.78,0.87,0.95,1.02,1.09,1.15,1.2,1.24,1.28,1.31,1.33,1.35,1.36,1.36,1.36,1.34,1.32,1.3,1.26,1.22,1.18]
         }, {
             type: "line",
             name: 'Pct. 95',
             marker: { enabled: false },
             data: [1.68,1.88,2.06,2.22,2.36,2.49,2.6,2.7,2.78,2.84,2.89,2.92,2.93,2.93,2.91,2.87,2.82,2.75,2.67,2.57,2.45]
         }, {
             type: "line",
             name: 'Cuociente CP.',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 // generate an array of random data
                 var data = [];
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }

                 var ccp = $("#ccp").val();
                 ccp = ccp.toString();
                 ccp = ccp.replace(",", ".");
                 ccp = parseFloat(ccp);

                 data.push({
                     y: ccp,
                 });
                 for (i = edadGest + 1; i <= 38; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
    });
    $('#popupGraficos').modal('show');
});

$( '#infecoObsSegTrim1' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfica evaluación ecográfica del crecimiento fetal");
    $( '#impEcoObsSegTrim1').remove();
    $( '#infecoObsSegTrim1Clon').remove();
    $('#graficosFooter').prepend("<button type='button' class='btn btn-outline-info' id='impEcoObsSegTrim1'>Ver Impresion</button>");
    var stringGraficos = "<div class='container'><div style='width:100px;text-align:center;'></div></div><h4 class='text-center d-none'>Gráfica evaluación ecográfica del crecimiento fetal</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none mt-2'></span><div class='row d-none mt-2'> <div class='col-5'><p style='font-size:10px;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE </p></div><div class='col-3'><p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'><p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><div class='row'><div class='col'><div id='graficoInfecoObsSegTrimPFEView'></div></div><div class='col'><div class='row'><div class='col-12'><div id='graficoCaView'></div></div><div class='col-12'><div id='graficoBVMView'></div></div></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:10px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Evaluación del crecimiento fetal, según referencia propuesta por Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad pct. 10 a 90)<br>**  Circunferencia Ambominal según referencia de Hadlock y col. Radiology 152:497 - 501, 1984. (Normalidad Pct 3 a 97)<br>*** Liquido Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br>Herramienta informática diseñada por Dr. Rudecindo Lagos S.  Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
    var comentarios = $("#comentarios-eco-dos-inf-dos").val();

    if(typeof comentarios == 'undefined'){
	     comentarios = 'Crecimiento (peso) percentil ' + parseInt($('#pfePctRpt').val()) + ', para gráfica de peso fetal Hadlock*<br />Bolsillo vertical mayor de ' + document.getElementById("bvm").value + ' mm';
    }
    else{
	     comentarios = $("#comentarios-eco-dos-inf-dos").val().replace(/\r\n|\r|\n/g,"<br />");
    }
	
    stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);
    var paciente = $( '#nombre-paciente').val();
    var idpaciente = $( '#id-paciente').val();
    var fexamen = $( "input[name='fee']").val();
    var ecografista = $( '#ecografista option:selected').text();
    stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
    stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
    stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
    stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);
        
    $('#graficosBody').html(stringGraficos);
    $( '#impEcoObsSegTrim1').on("click", function(){
      imprSelec("graficosBody");
    });
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $.post("https://pacientes.crecimientofetal.cl/temporal/segundo", args).done(function(respuesta){
		if (Object.keys(respuesta).length > 0) {
            $('#graficoInfecoObsSegTrimPFEView').highcharts({
                    chart: {
                    height: 512
                },
            title: {
                text: 'Peso Fetal Estimado *',
                x: -20, //center
                    style: {
                    fontSize: '14px'
                }
            },
                    legend: {
                    itemStyle: {
                        fontSize: '10px',
                        fontWeight:'normal'
                    }
                },
            plotOptions: {
                series: {
                    enableMouseTracking: false,
                    pointInterval: 1
                }
            },
            yAxis: {
                title: { text: 'Kilogramos' },
                tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {enabled: false},
            series: [{
                type: "line",
                name: 'Pct 3',
                dashStyle: "Dot",
                marker: {enabled: false},
                data: [110,136,167,205,248,299,359,426,503,589,685,791,908,1034,1169,1313,1465,1622,1783,1946,2110,2271,2427,2576,2714]
            }, {
                type: "line",
                name: 'Pct 10',
                marker: { enabled: false },
                data: [121,150,185,227,275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985]
            }, {
                type: "line",
                name: 'Pct 90',
                marker: { enabled: false },
                data: [171,212,261,319,387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234]
            }, {
                type: "line",
                name: 'Pct 97',
                dashStyle: "Dot",
                marker: { enabled: false, },
                data: [183,226,279,341,414,499,598,710,838,981,1141,1319,1513,1724,1949,2189,2441,2703,2971,3244,3516,3785,4045,4294,4474]
            }, {
                type: "line",
                name: 'Peso',
                dashStyle: "Dot",
                marker: {symbol:'square'},
                lineWidth: 0,
                data: (function () {
                    var data = [];

                    for (i = 16; i <= 39; i++) {
                        flag = false;
                        $.each(respuesta, function(X,val){
                            var eG = val.tempdostable_eg;
                            eG = eG.toString();
                            eG = eG.replace(",", ".");
                            eG = parseFloat(eG);

                            if (i == eG){
                                var pfe = val.tempdostable_pfe;
                                pfe = pfe.toString();
                                pfe = pfe.replace(",", ".");
                                pfe = parseFloat(pfe);                                
                                data.push({
                                    y: pfe,
                                });
                                flag = true;
                            }
                        });

                        if (flag == false) {
                            data.push({
                                y:0,
                            });
                        }

                    }
                    return data;
                }())
            }]
            });
            $('#graficoCaView').highcharts({
                    chart: {
                    height: 250
                },
            title: {
                text: 'Circunferencia Abdominal **',
                x: -20, //center
                    style: {
                    fontSize: '14px'
                }
            },
            subtitle: {
                text: 'Milimetros (mm)',
                x: -20
            },
                    legend: {
                    itemStyle: {
                        fontSize: '10px',
                        fontWeight:'normal'
                    }
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
                dashStyle: "Dot",
                marker: { enabled: false },
                data: [40,50,60,72,84,97,107,119,131,141,151,161,171,181,191,200,209,218,227,236,245,253,261,269,277,285,292,299,307]
            }, {
                type: "line",
                name: 'Pct 97',
                dashStyle: "Dot",
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


                    for (i = 12; i <= 39; i++) {
                        flag = false;
                        $.each(respuesta, function(X,val){
                            var eG = val.tempdostable_eg;
                            eG = eG.toString();
                            eG = eG.replace(",", ".");
                            eG = parseFloat(eG);

                            if (i == eG){
                                var ca = val.tempdostable_ca;
                                ca = ca.toString();
                                ca = ca.replace(",", ".");
                                ca = parseFloat(ca);     
                                data.push({
                                    y: ca,
                                });
                                flag = true;
                            }
                        });

                        if (flag == false) {
                            data.push({
                                y:0,
                            });
                        }

                    }

                    return data;
                }())
            }]
        });
                
        $('#graficoBVMView').highcharts({
                    chart: {
                    height: 250
                },
                title: {
                    text: 'BVM de Líquido Amniótico ***',
                    x: -20,
                        style: {
                    fontSize: '14px'
                }
                },
                plotOptions: {
                    series: {
                        enableMouseTracking: false
                    }
                },
                    legend: {
                    itemStyle: {
                        fontSize: '10px',
                        fontWeight:'normal'
                    }
                },
                yAxis: {
                    title: { text: 'Milimetros (mm)' },
                    tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
                },
                colors: ['#313131','#313131','#313131'],
                xAxis: {
                    categories: ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
                },
                credits: {enabled:false},
                series: [{
                    type: "line",
                    name: 'Pct. 5',
                    dashStyle: "Dot",
                    marker: {enabled:false},
                    data: [23,25,27,28,29,29,30,30,30,30,30,30,30,29,29,29,29,29,28,28,27,26,24,23,21]
                }, {
                    type: "line",
                    name: 'Pct. 95',
                    dashStyle: "Dot",
                    marker: { enabled: false },
                    data: [59,62,64,66,67,68,68,68,68,68,68,69,69,69,69,70,71,72,72,72,71,70,68,66,62]
                }, {
                    type: "line",
                    name: 'BVM',
                    dashStyle: "Dot",
                    marker: { symbol: 'square' },
                    lineWidth: 0,
                    data: (
                        function () {
                            var data = [];

                            for (i = 16; i <= 39; i++) {
                                flag = false;
                                $.each(respuesta, function(X,val){
                                    var eG = val.tempdostable_eg;
                                    eG = eG.toString();
                                    eG = eG.replace(",", ".");
                                    eG = parseFloat(eG);
        
                                    if (i == eG){
                                        var bvm = val.tempdostable_bvm;
                                        bvm = bvm.toString();
                                        bvm = bvm.replace(",", ".");
                                        bvm = parseFloat(bvm);     
                                        data.push({
                                            y: bvm,
                                        });
                                        flag = true;
                                    }
                                });
        
                                if (flag == false) {
                                    data.push({
                                        y:0,
                                    });
                                }
        
                            }
                            return data;
                        }())
                    }]
            });
            $('#popupGraficos').modal('show');
        }
    });
});

$( '#infecoObsSegTrim2' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfica Determinación Ecográfica (Tardía) de la Edad Gestacional");
    $( '#impEcoObsSegTrim2').remove();
    $( '#infecoObsSegTrim1Clon').remove();
    $('#graficosFooter').prepend("<button type='button' class='btn btn-outline-info' id='impEcoObsSegTrim2'>Ver Impresion</button>");
    var stringGraficos = "<div class='container'><div style='width:100px;text-align:center;'></div></div><h4 class='text-center d-none'>Gráfica evaluación ecográfica del crecimiento fetal</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none mt-2'></span><div class='row d-none mt-2'> <div class='col-5'><p style='font-size:10px;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE </p></div><div class='col-3'><p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'><p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><div class='row mt-2'> <div class='col'><div id='graficoCcView'></div></div><div class='col'><div id='graficoCerebeloView'></div></div></div><div class='row'><div class='col'><div id='graficoLfView'></div></div><div class='col'><div id='graficoLhView'></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:12px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Para la evaluación morfológica fetal, ceñirse a recomendaciones oficiales vigentes, para Chile: Guías Perinatales MINSAL 2015<br>Ver dirección web: http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf<br>** Referencias: CC y LF Hadlock y col. 1984; LH Jeanty y col.<br>*** Diámetro cerebeloso transverso Hill LM. y col. Obstet Gynecol. 1990; 75(6) : 981-5<br>**** Referencia liq. amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
    var fur = $( "input[name='fum']").val();
    var fpp = $( "input[name='fpp']").val();

    var comentarios = $("#comentarios-eco-dos-inf-dos").val();
    var paciente = $( '#nombre-paciente').val();
    var idpaciente = $( '#id-paciente').val();
    var fexamen = $( "input[name='fee']").val();
    var ecografista = $( '#ecografista option:selected').text();
    stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
    stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
    stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
    stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);

    if(typeof comentarios == 'undefined'){
        comentarios = "Fum operacional: " + fur + "<br>Fecha probable de parto: " + fpp + "<br>" + $('#comentarios-eco-dos-generico').val().replace(/\r\n|\r|\n/g,"<br />");
    }
    else{
	comentarios = $("#comentarios-eco-dos-inf-dos").val().replace(/\r\n|\r|\n/g,"<br />");
    }

    stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);
        
    $('#graficosBody').html(stringGraficos);
    $( '#impEcoObsSegTrim2').on("click", function(){
      imprSelec("graficosBody");
    });
    $( '#impEcoObsSegTrim1').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoCcView').highcharts({
            chart: {
            height: 250
        },
       title: {
           text: 'Circunferencia de Cráneo',
           x: -20,
               style: {
            fontSize: '14px'
        }
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
            legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: 'Pct. 3',
           dashStyle: "Dot",
           marker: {enabled: false},
           data: [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
       }, {
           type: "line",
           name: 'Pct. 97',
           dashStyle: "Dot",
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

               for (i = 12; i <= 39; i++) {
                flag = false;
                $.each(respuesta, function(X,val){
                    var eG = val.tempdostable_eg;
                    eG = eG.toString();
                    eG = eG.replace(",", ".");
                    eG = parseFloat(eG);

                    if (i == eG){
                        var cc = val.tempdostable_cc;
                        cc = cc.toString();
                        cc = cc.replace(",", ".");
                        cc = parseFloat(cc);     
                        data.push({
                            y: cc,
                        });
                        flag = true;
                    }
                });

                if (flag == false) {
                    data.push({
                        y:0,
                    });
                }

            }

               return data;
           }())
       }]
   });
   $('#graficoCerebeloView').highcharts({
           chart: {
            height: 250
        },
            title: {
                text: 'Diámetro de Cerebelo',
                x: -20,
                    style: {
            fontSize: '14px'
        }
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
           legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: {enabled: false},
            series: [{
                type: "line",
                name: '-2DE',
                dashStyle: "Dot",
                marker: {enabled: false},
                data: [12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 29, 30, 31, 33, 36, 37, 38, 40, 40, 40, 41, 42, 44]
            }, {
                type: "line",
                name: 'media',
                dashStyle: "Dot",
                marker: {enabled: false},
                data: [15, 16, 17, 18, 20, 20, 22, 23, 24, 26, 28, 30, 31, 33, 34, 37, 39, 41, 43, 46, 47, 49, 51, 51, 52, 52]
            }, {
                type: "line",
                name: '+2DE',
                dashStyle: "Dot",
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

                    for (i = 12; i <= 39; i++) {
                        flag = false;
                        $.each(respuesta, function(X,val){
                            var eG = val.tempdostable_eg;
                            eG = eG.toString();
                            eG = eG.replace(",", ".");
                            eG = parseFloat(eG);
        
                            if (i == eG){
                                var cerebelo = val.tempdostable_cerebelo;
                                cerebelo = cerebelo.toString();
                                cerebelo = cerebelo.replace(",", ".");
                                cerebelo = parseFloat(cerebelo);     
                                data.push({
                                    y: cerebelo,
                                });
                                flag = true;
                            }
                        });
        
                        if (flag == false) {
                            data.push({
                                y:0,
                            });
                        }
        
                    }

                    return data;
                }())
            }]
        });
    $('#graficoLfView').highcharts({
            chart: {
            height: 250
        },
       title: {
           text: 'Largo Femoral',
           x: -20,
               style: {
            fontSize: '14px'
        }
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
            legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
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
           dashStyle: "Dot",
           marker: { enabled: false },
           data: [6,9,12,14,17,20,22,25,27,30,32,35,37,40,42,45,47,49,52,54,56,58,59,61,62,64,65,66,67]
       }, {
           type: "line",
           name: 'Pct. 97',
           dashStyle: "Dot",
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

               for (i = 12; i <= 39; i++) {
                flag = false;
                $.each(respuesta, function(X,val){
                    var eG = val.tempdostable_eg;
                    eG = eG.toString();
                    eG = eG.replace(",", ".");
                    eG = parseFloat(eG);

                    if (i == eG){
                        var lf = val.tempdostable_lf;
                        lf = lf.toString();
                        lf = lf.replace(",", ".");
                        lf = parseFloat(lf);     
                        data.push({
                            y: lf,
                        });
                        flag = true;
                    }
                });

                if (flag == false) {
                    data.push({
                        y:0,
                    });
                }

            }
               return data;
           }())
       }]
   });
   $('#graficoLhView').highcharts({
           chart: {
            height: 250
        },
            title: {
                text: 'Largo Humeral',
                x: -20,
                    style: {
            fontSize: '14px'
        }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
           legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
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
                dashStyle: "Dot",
                marker: { enabled: false },
                data: [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9]
            }, {
                type: "line",
                name: 'Pct. 95',
                dashStyle: "Dot",
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
                    for (i = 12; i <= 39; i++) {
                        flag = false;
                        $.each(respuesta, function(X,val){
                            var eG = val.tempdostable_eg;
                            eG = eG.toString();
                            eG = eG.replace(",", ".");
                            eG = parseFloat(eG);
        
                            if (i == eG){
                                var lh = val.tempdostable_lh;
                                lh = lh.toString();
                                lh = lh.replace(",", ".");
                                lh = parseFloat(lh);     
                                data.push({
                                    y: lh,
                                });
                                flag = true;
                            }
                        });
        
                        if (flag == false) {
                            data.push({
                                y:0,
                            });
                        }
        
                    }

                    return data;
                }())
            }]
    });
    $('#popupGraficos').modal('show');
});

$( '#graficoTalla' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Talla Fetal Estimada Referencia Neonatal SOCHIPE");
    $('#graficosBody').html("<div id='viewGraficoTalla'></div><p><small>Talla (Formula = lf * 0.55 + 9.6) </small></p>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
$('#viewGraficoTalla').highcharts({
        title: {
            text: 'Talla Fetal estimada',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'mm' },
            tickPositions: [25, 35, 45, 55]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Talla PCT 90',
            marker: { enabled: false },
            data:  [34.1,35.7,37.2,38.7,40.1,41.6,43.1,44.3,45.6,46.8,47.9,49.1,49.9,50.8,51.5,52.1,52.6,52.9,53.1]
        }, {
            type: "line",
            name: 'Talla PCT 50',
            marker: { enabled: false },
            data: [31.6,33.1,34.5,36.1,37.5,39.1,40.5,41.9,43.3,44.6,45.8,46.9,47.9,48.7,49.6,50.3,50.8,51.1,51.3]
        }, {
            type: "line",
            name: 'Talla PCT 10',
            marker: { enabled: false },
            data: [29.8,31.1,32.3,33.6,35.1,36.5,37.7,39.1,40.5,41.8,43.1,44.2,45.3,46.3,47.2,47.9,48.5,48.8,49.1]
        }, {
            type: "line",
            name: 'talla',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseInt(document.getElementById("tallaFetal").value),
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
            $('#popupGraficos').modal('show');
});

$( '#graficopsmACM' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Pick sistólico máximo de ACM");
    $('#graficosBody').html("<div id='viewGraficopsmACM'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    var medida = parseFloat(document.getElementById("psmACM").value);
                                
$('#viewGraficopsmACM').highcharts({
        title: {
            text: 'Pick sistólico máximo de ACM',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'cm/s' },
            tickPositions: [20, 40, 60, 80, 100]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Valor de la Media',
            marker: { enabled: false },  
            data:  [23.2,24.3,25.5,26.7,27.9,29.3,30.7,32.1,33.6,35.2,36.9,38.7,40.5,42.4,44.4,46.5,48.7,51.1,53.5,56,58.7,61.5,64.4]
        }, {
            type: "line",
            name: 'Anemia leve',
            marker: { enabled: false },
            data: [29.9, 31.1, 32.8,34.5,36,37.8,39.5,41.5,43.3,45.6,47.6,50.4,52.2,55,57.3,60.1,62.9,66,69,72.8,75.7,79.8,83] 
        }, {
            type: "line",
            name: 'Anemia moderada',
            marker: { enabled: false },
            data: [34.8,36.5,38.2,39.7,41.9,44,46,48,50.4,53,55.4,58,60.9,63.5,66.6,70,73.1,76.5,80.2,84,88,92.5,96.6]
        }, {
            type: "line",
            name: 'Pick sistólico máximo de ACM',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 18; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: medida,
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
            $('#popupGraficos').modal('show');
});

$( '#graficoBVM' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfica BVM");
    $('#graficosBody').html("<div id='graficoBVMView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoBVMView').highcharts({
             chart: {
             height: 250
         },
         title: {
             text: 'BVM de Líquido Amniótico ***',
             x: -20,
                 style: {
             fontSize: '14px'
         }
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
             legend: {
             itemStyle: {
                 fontSize: '10px',
                 fontWeight:'normal'
             }
         },
         yAxis: {
             title: { text: 'Milimetros (mm)' },
             tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
         },
         colors: ['#313131','#313131','#313131'],
         xAxis: {
             categories: ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         credits: {enabled:false},
         series: [{
             type: "line",
             name: 'Pct. 5',
             dashStyle: "Dot",
             marker: {enabled:false},
             data: [23,25,27,28,29,29,30,30,30,30,30,30,30,29,29,29,29,29,28,28,27,26,24,23,21]
         }, {
             type: "line",
             name: 'Pct. 95',
             dashStyle: "Dot",
             marker: { enabled: false },
             data: [59,62,64,66,67,68,68,68,68,68,68,69,69,69,69,70,71,72,72,72,71,70,68,66,62]
         }, {
             type: "line",
             name: 'BVM',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (
                 function () {
                     var data = [];
                     var edadGest = parseInt(localStorage.eg) -1;
 
                     for (i = 16; i <= edadGest; i ++ ) {
                         data.push({
                             y: 0,
                         });
                     }
                     data.push({
                             y: parseFloat($('#bvm').val()),
                         });
                     for (i = edadGest +1; i <= 39; i ++ ) {
                         data.push({
                             y: 0,
                         });
                     }
                     return data;
                 }())
             }]
     });
    $('#popupGraficos').modal('show');
});
});
