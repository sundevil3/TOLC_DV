/*var currentDateSelected;
var currentMonthSelected;
var currentYearSelected; 
//function changeMonthAndYearDynamically(){
d3.csv("data/final2.csv", function(dataa) {
	console.log(selectedDateValue);
	currentDateSelected = new Date(selectedDateValue);
	currentMonthSelected = (currentDateSelected.getUTCMonth() + 1).toString();
	currentYearSelected = (currentDateSelected.getUTCFullYear()).toString();
	console.log(currentMonthSelected);
	console.log(currentYearSelected);
	
	
	filteredDataForPanel1 = dataa.filter(function(rowForMonthAndYear) {
		//change || to && for real output
        return rowForMonthAndYear['year'] ==  currentYearSelected || rowForMonthAndYear['month'] == currentMonthSelected;
		//return rowForMonthAndYear['month'] == currentMonthSelected;
		 if( rowForMonthAndYear["year"] == currentYearSelected && rowForMonthAndYear["month"]== currentMonthSelected )
	        { 
	            return rowForMonthAndYear;
	        } 
    })
    console.log(filteredDataForPanel1.length)
    numberOfRowsInTheFinalData = filteredDataForPanel1.length;
	
    var div = d3.select("#panel1Body").append("div").attr("class", "toolTipPanel1");

    var axisMargin = 20,
            margin = 40,
            valueMargin = 4,
            width = parseInt(d3.select('#panel1Body').style('width'), 10),
            height = parseInt(d3.select('#panel1Body').style('height'), 10),
            barHeight = (height-axisMargin-margin*2)* 0.35/6,
            barPadding = (height-axisMargin-margin*2)*0.6/data.length,
            barPadding = 3.5,
            filteredDataForPanel1, bar, svgPanel1, scale, xAxis, labelWidth = 0;

    max = d3.max(filteredDataForPanel1, function(d) { return d.efficiencyFactor; });
    
    svgPanel1 = d3.select('#panel1Body')
            .append("svg")
            .attr("id","svgPanel1")
            .attr("viewBox", "0 0 400 650")
            .attr("preserveAspectRatio", "xMinYMin meet")
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
//}*/