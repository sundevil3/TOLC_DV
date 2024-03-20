$(document).ready(function(){
    efficiencyDisplay();
});
formatDate = d3.time.format("%b %y");

var currentDateSelected;
var currentMonthSelected;
var currentYearSelected;
var currentMonthNameSelected;
var filteredDataForPanel1;
// parameters
var sliderMargin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
},
    sliderWidth = 960 - sliderMargin.left - sliderMargin.right,
    sliderHeight = 150 - sliderMargin.bottom - sliderMargin.top;

var monthAndYear = [];


// scale function
var timeScale = d3.time.scale()
.domain([new Date('2014-01-02'), new Date('2016-12-31')])
.range([0, sliderWidth])
.clamp(true);


// initial value
var startValue = timeScale(new Date('2014-01-02'));
startingValue = new Date('2014-01-02');



var svgSlider = d3.select("#divslider").append("svg")
.attr("width", sliderWidth + sliderMargin.left + sliderMargin.right)
.attr("height", sliderHeight + sliderMargin.top + sliderMargin.bottom)
.append("g")
// classic transform to position g
.attr("transform", "translate(" + sliderMargin.left + "," + sliderMargin.top + ")");

svgSlider.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + sliderHeight / 2 + ")")
    .call(d3.svg.axis()
          .scale(timeScale)
          .orient("bottom")
          .tickFormat(function(d) {
    return formatDate(d);
})
          .tickSize(3)
          .tickPadding(12)
          .tickValues([timeScale.domain()[0], timeScale.domain()[1]]))
    .select(".domain")
    .select(function() {
    return this.parentNode.appendChild(this.cloneNode(true));
})
    .attr("class", "ticks")
    .attr("class", "halo")
    .style("cursor","default");


svgSlider.append("g")
    .attr("class", "x axisOver")
    .attr("transform", "translate(0," + sliderHeight / 2 + ")")
    .call(d3.svg.axis()
          .scale(timeScale)
          .orient("bottom")
          .tickFormat(function(d) {return formatDate(d);})
          .tickSize(3,2)
          .tickPadding(12))
    .style("cursor","default");

var brush = d3.svg.brush()
.x(timeScale)
.extent([startingValue, startingValue])
.on("brush", brushed);

var slider = svgSlider.append("g")
.attr("class", "slider")
.call(brush)
.style("cursor","default");

/*var sliderBar = svgSliderContainer.selectAll("body");*/

slider.selectAll(".extent,.resize")
    .remove();

slider.select(".background")
    .attr("height", sliderHeight);

var handle = slider.append("g")
.attr("class", "handle")

handle.append("path")
    .attr("transform", "translate(0," + sliderHeight / 2 + ")")
    .attr("d", "M 0 -10 V 10")

handle.append('text')
    .text(startingValue)
    .attr("transform", "translate(" + (-18) + " ," + (sliderHeight / 2 - 25) + ")");

slider
    .call(brush.event);

var xColumnName = "Year";
var yColumnName = "Month";

var oldDate = d3.min(monthAndYear);
var latestDate = d3.max(monthAndYear);


function brushed() {
    selectedDateValue = brush.extent()[0];

    if (d3.event.sourceEvent) { // not a programmatic event
        selectedDateValue = timeScale.invert(d3.mouse(this)[0]);
        brush.extent([selectedDateValue, selectedDateValue]);
        changeMapPointColor(selectedDateValue);
        DrawColumnGraph();
       // multiline(selectedYear);
        efficiencyDisplay();
    }

    handle.attr("transform", "translate(" + timeScale(selectedDateValue) + ",0)");
    handle.select('text').text(formatDate(selectedDateValue));


}

function efficiencyDisplay(){
    d3.csv("data/EfficiencyFactorDisplay.csv", function(dataa) {
    	
        $("#panel1Body").empty();
        //////console.log(selectedDateValue);
        currentDateSelected = new Date(selectedDateValue);
        currentMonthSelected = (currentDateSelected.getUTCMonth() + 1).toString();
        currentYearSelected = (currentDateSelected.getUTCFullYear()).toString();
        currentMonthNameSelected = (currentDateSelected.toString()).substr(4,3);
        $('#yearOfPanel1').html(currentMonthNameSelected +" " + currentYearSelected);
        ////console.log(currentMonthSelected);
        ////console.log(currentYearSelected);
        filteredDataForPanel1 = dataa.filter(function(rowForMonthAndYear) {
            return rowForMonthAndYear['year'] ==  currentYearSelected && rowForMonthAndYear['month'] == currentMonthSelected;
        })
        ////console.log(filteredDataForPanel1)
        filteredDataForPanel1.sort(function(a, b){return a.efficiencyFactor - b.efficiencyFactor});
        filteredDataForPanel1.reverse();
        numberOfRowsInTheFinalData = filteredDataForPanel1.length;

        var div = d3.select("#panel1Body").append("div").attr("class", "toolTipPanel1");

        var axisMargin = 20,
            margin = 40,
            valueMargin = 4,
            width = parseInt(d3.select('#panel1Body').style('width'), 10),
            height = parseInt(d3.select('#panel1Body').style('height'), 10),
            barHeight = (height-axisMargin-margin*2)* 0.35/6,
            /*barPadding = (height-axisMargin-margin*2)*0.6/data.length,*/
            barPadding = 3.5,
             bar, svgPanel1, scale, xAxis, labelWidth = 0;

        max = d3.max(filteredDataForPanel1, function(d) { return d.efficiencyFactor; });

        svgPanel1 = d3.select('#panel1Body')
            .append("svg")
            .attr("id","svgPanel1")
        /*.attr("viewBox", "0 0 400 650")
	                .attr("preserveAspectRatio", "xMinYMin meet")*/
            .attr("width", width)
            .attr("height", (barHeight+barPadding)*numberOfRowsInTheFinalData);


        bar = svgPanel1.selectAll("g")
            .data(filteredDataForPanel1)
            .enter()
            .append("g");

        bar.attr("class", "bar")
        //.attr("cx",0)
            .attr("transform", function(d, i) {
            return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
        });

        bar.append("text")
            .attr("class", "label")
            .attr("y", barHeight / 2)
            .attr("dy", ".35em") //vertical align middle
            .text(function(d){return d.iata;})
            .each(function() {labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
                             });

        scale = d3.scale.linear()
            .domain([0, max])
            .range([0, width - margin*2 - labelWidth]);

        xAxis = d3.svg.axis()
            .scale(scale)
            .orient("bottom");

        bar.append("rect")
            .attr("transform", "translate("+labelWidth+", 0)")
            .attr("height", barHeight)
            .attr("width", function(d){
            return scale(d.efficiencyFactor);
        });

        bar.append("text")
            .attr("class", "value")
            .attr("y", barHeight / 2)
            .attr("dx", -valueMargin + labelWidth) //margin right
            .attr("dy", ".35em") //vertical align middle
            .attr("text-anchor", "end")
            .text(function(d){
            return (d.efficiencyFactor+"%");
        })
            .attr("x", function(d){
            var width = this.getBBox().width;
            return Math.max(width + valueMargin, scale(d.efficiencyFactor));
        });

        bar.on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", d3.event.pageY-25+"px");
            div.style("display", "inline-block");
            div.html((d.name)+"<br>"+(d.efficiencyFactor)+"%");
        });
        bar.on("mouseout", function(d){
            div.style("display", "none");
        });

        svgPanel1.insert("g",":first-child")
            .attr("class", "axisHorizontal")
            .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")");
    });
}
