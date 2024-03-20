var selectedDateValue;

var airportdataset = [];
var delaydataset = [];

var colorMaroon = "#800000";
var colorDarkBlue = "#0066CC";//"#756bb1";

var colorClass = 10;

//Change the color
function changeMapPointColor() {

    var currDate = new Date(selectedDateValue);
    var currMonth = (currDate.getUTCMonth() + 1).toString();
    var currYear = (currDate.getUTCFullYear()).toString();

    var colorScale = ["#800000", "#720B17", "#64172D", "#552244", "#472D5B", "#393971", "#2B4488", "#1C4F9F", "#0E5BB5", "#0066CC"];

    svgMap.selectAll("circle").style("fill", function (ap) {
        var c = colorMaroon;
        ap.TimeData.forEach(function (d) {
            if(d.Year == currYear && d.Month == currMonth) {
                c = (d3.color(colorScale[Math.floor(d.EffectiveEfficiencyFactor / colorClass)]));
            }
        });
        return d3.color(c);
    });
}

//Calculate airport effective efficiency 
function calculateAirportStats(delayData) {

    var max = 0, min = 100;

    delayData.forEach(function (d) {

        var name = d["Airport Full Name"];
        var iata = d["Airport"];
        var year = +d["Year"];
        var month = +d["Month"];
        var count = +d["Arrival Flights Total Count"];
        var eff = +d["Efficiency Factor"];
        var carrierDelay = +d["Carrier Delay Percentage"];
        var nasDelay = +d["NAS Delay Percentage"];
        var WeatherDelay = +d["Weather Delay Percentage"];
        var SecurityDelay = +d["Security Delay Percentage"];
        var lateAircraftDelay = +d["Late Aircraft Delay Percentage"];
        var delayedFlightsCount = +d["Arrival Delay Total Count"];

        delaydataset.push(d);

        airportdataset.forEach(function (ads) {

            if(ads["Airport IATA"] == iata) {

                var tdDelayData;
                if(ads.TimeData.length != 0) {

                    tdDelayData = ads.TimeData.filter(function (f) {
                        if(f.Year == year && f.Month == month) {
                            return f;
                        }
                    });
                }
                if(tdDelayData == null) {
                    tdDelayData = {Year: year, Month: month, EffectiveEfficiencyFactor : 0, FlightCount : 0, AvgDelayCarrier : 0, AvgDelayLateAircraft : 0, AvgDelayNas : 0, AvgDelaySecurity : 0, AvgDelayWeather : 0, DelayedFlightsCount : 0};
                    ads.TimeData.push(tdDelayData);
                }

                tdDelayData.FlightCount = tdDelayData.FlightCount + count;
                tdDelayData.EffectiveEfficiencyFactor = tdDelayData.EffectiveEfficiencyFactor + (count * eff);
                tdDelayData.AvgDelayCarrier = tdDelayData.AvgDelayCarrier + (carrierDelay * delayedFlightsCount);
                tdDelayData.AvgDelayNas = tdDelayData.AvgDelayNas + (nasDelay * delayedFlightsCount);
                tdDelayData.AvgDelayWeather = tdDelayData.AvgDelayWeather + (WeatherDelay * delayedFlightsCount);
                tdDelayData.AvgDelaySecurity = tdDelayData.AvgDelaySecurity + (SecurityDelay * delayedFlightsCount);
                tdDelayData.AvgDelayLateAircraft = tdDelayData.AvgDelayLateAircraft + (lateAircraftDelay * delayedFlightsCount);
                tdDelayData.DelayedFlightsCount = tdDelayData.DelayedFlightsCount + delayedFlightsCount;

            }
        });
    });
    airportdataset.forEach(function (ads) {
        ads.TimeData.forEach(function (d) {
            if(d.FlightCount > 0)
                d.EffectiveEfficiencyFactor = d.EffectiveEfficiencyFactor / d.FlightCount;
            if(d.DelayedFlightsCount > 0) {
                d.AvgDelayCarrier = d.AvgDelayCarrier / d.DelayedFlightsCount;
                d.AvgDelayNas = d.AvgDelayNas / d.DelayedFlightsCount;
                d.AvgDelayWeather = d.AvgDelayWeather / d.DelayedFlightsCount;
                d.AvgDelaySecurity = d.AvgDelaySecurity / d.DelayedFlightsCount;
                d.AvgDelayLateAircraft = d.AvgDelayLateAircraft / d.DelayedFlightsCount;
            }
        });
    });
}