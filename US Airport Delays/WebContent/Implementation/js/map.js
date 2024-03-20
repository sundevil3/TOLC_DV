var mapWidth = 950, mapHeight = 500;

var circleRadius = 5, decimalCount = 4;
var mapLegendColorScaleWidth = 30, mapLegendColorScaleHeight = 80;

var selectedCircle = null;

var selectedYear = 0, selectedMonth = 0;

//Define zoom behavior
var zoom = d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

//Select map SVG element
var svgMap = d3.select("#svgmap").attr("width", mapWidth).attr("height", mapHeight).call(zoom).append("g");

//Create an albersUsa projection and traslate it to the center of the workspace (mapWidth x mapHeight)
var projection = d3.geo.albersUsa().translate([mapWidth / 2, mapHeight / 2]);

//Create a path for the projection
var path = d3.geo.path().projection(projection);

// Append Div for tooltip to SVG
var tooltip = d3.select("body")
.append("div")
.attr("id", "divTooltip")
.style("opacity", 0);

//Define colors for 
var colorDarkRed = d3.rgb(139, 0, 0);
var colorLightCoral = d3.rgb(240, 128, 128);
var colorLightGray = d3.rgb(211, 211, 211);

//SVG for Map Legends container
var svgMapLegends = d3.select("#svgmaplegends").attr("width", mapLegendColorScaleWidth * 2).attr("height", mapLegendColorScaleHeight).append("g");

//SVG for Map Legends with vertical orientation of the gradient
var linearGradient = svgMapLegends.append("defs").append("linearGradient").attr("id", "lineargradient")
.attr("x1", "0%").attr("y1", "0%").attr("x2", "0%").attr("y2", "100%");

//Various elements (stop, rect, text) for the Map Legends SVG
linearGradient.append("stop").attr("offset", "0%").attr("stop-color", colorDarkBlue);
linearGradient.append("stop").attr("offset", "100%").attr("stop-color", colorMaroon);
svgMapLegends.append("rect")
    .attr("width", mapLegendColorScaleWidth)
    .attr("height", mapLegendColorScaleHeight)
    .style("fill", "url(#lineargradient)");
svgMapLegends.append("text")
    .attr("class", "maplegendtext")
    .attr("x", mapLegendColorScaleWidth + 2)
    .attr("y", 10)
    .text("Most");
svgMapLegends.append("text")
    .attr("class", "maplegendtext")
    .attr("x", mapLegendColorScaleWidth + 2)
    .attr("y", mapLegendColorScaleHeight - 5)
    .text("Least");

d3.selection.prototype.moveToFront = function() {
    return this.each(function(){
        this.parentNode.appendChild(this);
    });
};

//Load GeoJSON data
d3.json("data/us-states.json", function(errorUsStates, json) {
    if (errorUsStates) throw errorUsStates;

    // Bind the data to the SVG and create one path per GeoJSON feature
    svgMap.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path);


    //Load Airports data
    d3.csv("data/Airports.csv", function (errorAirports, data) {
        if(errorAirports) throw errorAirports;

        data.forEach(function (d) {
            d["Latitude"] = +d["Latitude"];
            d["Longitude"] = +d["Longitude"];
            d["Altitude"] = +d["Altitude"];
            d.TimeData = [];

            airportdataset.push(d);
        });

        //Load Delay data
        d3.csv("data/Delay.csv", function (errorDelay, delayData) {
            if (errorDelay) throw errorDelay;

            //Calcculate statistics of the airports for the entire dataset
            calculateAirportStats(delayData);
        });

        
        //Map elements with elements and their corresponding functionalities and interaction
        svgMap.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "svgcircle")
            .attr("r", circleRadius/zoom.scale())
            .attr("fill", "black")
            .attr("transform", function (d) {return "translate(" + projection([d["Longitude"], d["Latitude"]]) + ")";})

            .on("mouseover", function(d) { 
            var selCircle = d3.select(this);
            selCircle.moveToFront();
            setCircleProperties(this, circleRadius * 2);
            applyTooltipTransition(0.9);

            //Set tooltip content
            var airportCode = "-", airportName = "-", airportLocation = "-", airportCity = "-", airportAltitude = "-";
            if(d["Airport IATA"]) { 
                airportCode = d["Airport IATA"] };
            if(d["Airport Name"]) { 
                airportName = d["Airport Name"] };
            if(d["Latitude"] || d["Longitude"]) {
                airportLocation = "( " + parseFloat(d["Latitude"]).toFixed(decimalCount) + " , " + parseFloat(d["Longitude"]).toFixed(decimalCount) + " )" };
            if(d["City"]) { 
                airportCity = d["City"] };
            if(d["Altitude"]) { 
                airportAltitude = d["Altitude"] };

            tooltip.html('<div id="divTooltipAirportCode">' + airportCode + '</div><div id="divTooltipAirportDetails"><table>' + 
                         '<tr class="trTooltip"><td class="tdFirstTooltip">Name:</td><td class="tdSecondTooltip">' + airportName + '</td></tr>' + 
                         '<tr class="trTooltip"><td class="tdFirstTooltip">Location:</td><td class="tdSecondTooltip">' + airportLocation + '</td></tr>' + 
                         '<tr class="trTooltip"><td class="tdFirstTooltip">City:</td><td class="tdSecondTooltip">' + airportCity + '</td></tr>' + 
                         '<tr class="trTooltip"><td class="tdFirstTooltip">Altitude:</td><td class="tdSecondTooltip">' + airportAltitude + '\' above MSL</td></tr>')
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 30) + "px");

        })
            .on("mouseout", function(d) {
            if(selectedCircle != this) {
                setCircleProperties(this, circleRadius);
            }
            applyTooltipTransition(0);
        })
            .on("click", function(d) {

            if(selectedCircle == this) {
                d3.select(this).style("opacity", 1);
                setCircleProperties(selectedCircle, circleRadius);
                d3.selectAll(".svgcircle").style("opacity", 1);
                selectedCircle = null;
            }
            else if (selectedCircle == null) {
                d3.selectAll(".svgcircle").style("opacity", 0.3);
                setCircleProperties(this, circleRadius * 2);
                d3.select(this).style("opacity", 1);
                selectedCircle = this;
            }
            else {
                setCircleProperties(selectedCircle, circleRadius);
                d3.select(selectedCircle).style("opacity", 0.3);
                setCircleProperties(this, circleRadius * 2);
                d3.select(this).style("opacity", 1);
                selectedCircle = this;
            }
            DrawColumnGraph();
            applyTooltipTransition(0);
            
        });

    });

});

//Set circle radius, transition and animation
function setCircleProperties(circleElement, newCircleRadius) {
    d3.select(circleElement)
        .transition()
        .ease("elastic")
        .duration(200)
        .attr("r", newCircleRadius/zoom.scale());
}

//Set tooltip transition and opacity
function applyTooltipTransition(newOpacity) {
    tooltip.transition()
        .duration(500)
        .style("opacity", newOpacity);
}

//Apply the SVG changes upon zoom in/out
function zoomed() {
    svgMap.attr("transform",
                "translate(" + zoom.translate() + ")" +
                "scale(" + zoom.scale() + ")");
    svgMap.selectAll("circle")
        .attr("d", path.projection(projection))
        .attr("r", circleRadius/zoom.scale());
    svgMap.selectAll("path")
        .attr("d", path.projection(projection));
}

//Interpolate zoom with scale, transition and animation
function interpolateZoom (translate, scale) {
    return d3.transition().duration(350).tween("zoom", function () {
        var iTranslate = d3.interpolate(zoom.translate(), translate),
            iScale = d3.interpolate(zoom.scale(), scale);
        return function (t) {
            zoom.scale(iScale(t))
                .translate(iTranslate(t));
            zoomed();
        };
    });
}

//Function to characterize zoom type (in/out/reset) and define a central viewport for the map
function zoomClick() {
    var direction = -1,
        factor = 0.2,
        target_zoom = 1,
        center = [mapWidth / 2, mapHeight / 2],
        extent = zoom.scaleExtent(),
        translate = zoom.translate(),
        translate_temp = [],
        l = [],
        view = {x: translate[0], y: translate[1], k: zoom.scale()};

    if (arguments[0] == 0) { zoomReset(); }
    else if (arguments[0] == 1) { direction = arguments[0]; }

    target_zoom = zoom.scale() * (1 + factor * direction);

    if (target_zoom < extent[0] || target_zoom > extent[1]) { return false; }

    translate_temp = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
    view.k = target_zoom;
    l = [translate_temp[0] * view.k + view.x, translate_temp[1] * view.k + view.y];

    view.x += center[0] - l[0];
    view.y += center[1] - l[1];

    interpolateZoom([view.x, view.y], view.k);
}

//Reset the zoom with transition and animation
function zoomReset() {
    zoom.translate([0,0]).scale(1);
    svgMap.transition()
        .duration(750)
        .attr("transform", "");
    svgMap.selectAll("circle")
        .attr("d", path.projection(projection))
        .attr("r", circleRadius/zoom.scale());
}