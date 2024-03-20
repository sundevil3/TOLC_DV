function multi(selectedDateValue) {

    currentDateSelected = new Date(selectedDateValue);

    curr_Year = (currentDateSelected.getUTCFullYear()).toString();
    delaydataset.forEach(function(dd){
        if ( selectedCircle.__data__["Airport IATA"] == dd.iata){
            airportdataset.forEach(function (ads) {
                ads.TimeData.forEach(function (d) {

                    if ((d.Year) == curr_Year)
                    {        variableB =     d.EffectiveEfficiencyFactor ;
                     variableC    = d.AvgDelayCarrier ;
                     variableD= d.AvgDelayNas;
                     variableE =  d.AvgDelayWeather; 
                     variableF=d.AvgDelaySecurity ;
                     variableG = d.AvgDelayLateAircraft;
                     variableJ =d.Month;
                    }
                })
            })
        }})


                /*   var chart = makeLineChart(ads,'variableJ', {

                    'Efficiency factor': {column: 'variableB'},
                    'Carrier Delay %': {column: 'variableC'},
                    'Weather Delay %': {column: 'variableD'},
                    'NAS Delay %' : {column: 'variableE'},
                    'Security Delay %' : {column: 'variableF'},
                    'Late Aircraft%' : {column : 'variableG'}
                }, {xAxis: 'Delay Date', yAxis: 'Amount'});
                chart.bind("#chart-line1");
                chart.render();
            });*/
                
            }
//                                   });
  //      }
