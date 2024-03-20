
"use strict";

var columnGraphDelayTypes = ["Weather", "Security", "NAS", "Late Aircraft", "Carrier"];

function DrawColumnGraph() {
    if(selectedCircle != null) {



        var currDate = new Date(selectedDateValue);
        var currMonth = (currDate.getUTCMonth() + 1).toString();
        var currYear = (currDate.getUTCFullYear()).toString();

        var data = filterData(currYear, currMonth),
            count = data[0].values.length,
            stack = d3.layout.stack().values(function (d) { return d.values; });

        stack(data);

        var chartMode = "stacked",
            numEnabledSeries = count,
            lastHoveredBarIndex,
            containerWidth = document.querySelector(".js-stacked-chart-container").clientWidth,
            containerHeight = d3.select("#divStackedBarChart").node().getBoundingClientRect().height,
            columnGraphMargin = {top: 80, right: 30, bottom: 20, left: 30},
            columnGraphWidth = containerWidth - columnGraphMargin.left - columnGraphMargin.right,
            columnGraphHeight = containerHeight - columnGraphMargin.top - columnGraphMargin.bottom,
            widthPerStack = columnGraphWidth / count,
            animationDuration = 400,
            delayBetweenBarAnimation = 10,
            numYAxisTicks = 8,
            maxStackY = d3.max(data, function (series) { return d3.max(series.values, function (d) { return d.y0 + d.y; }); }),
            paddingBetweenLegendSeries = 5,
            legendSeriesBoxX = 0,
            legendSeriesBoxY = 0,
            legendSeriesBoxWidth = 15,
            legendSeriesBoxHeight = 15,
            legendSeriesHeight = legendSeriesBoxHeight + paddingBetweenLegendSeries,
            legendSeriesLabelX = -35,
            legendSeriesLabelY = legendSeriesBoxHeight / 2,
            legendMargin = 20,
            legendX = containerWidth - legendSeriesBoxWidth - 5,
            legendY = legendMargin,
            tooltipTemplate = _.template(document.querySelector(".js-tooltip-table-content").innerHTML),
            overlayTopPadding = 20,
            tooltipBottomMargin = 12;

        var binsScale = d3.scale.ordinal()
        .domain(d3.range(count))
        .rangeBands([0, columnGraphWidth], 0.1, 0.05);

        var xScaleColumnGraph = d3.scale.linear()
        .domain([0, count])
        .range([0, columnGraphWidth]);

        var yScaleColumnGraph = d3.scale.linear()
        .domain([0, maxStackY])
        .range([columnGraphHeight, 0]);

        var heightScale = d3.scale.linear()
        .domain([0, maxStackY])
        .range([0, columnGraphHeight]);

        var xAxisColumnGraph = d3.svg.axis()
        .scale(xScaleColumnGraph)
        .ticks(count)
        .orient("bottom");

        var yAxisColumnGraph = d3.svg.axis()
        .scale(yScaleColumnGraph)
        .orient("left");

        var enabledSeries = function () { return _.reject(data, function (series) { return series.disabled; }); };

        var seriesClass = function (seriesName) { return "series-" + seriesName.toLowerCase().replace(" ", "-"); };

        var layerClass = function (d) { return "layer " + seriesClass(d.name); };

        var legendSeriesClass = function (d) { return "clickable " + seriesClass(d); };

        var barDelay = function (d, i) { return i * delayBetweenBarAnimation; };

        var joinKey = function (d) { return d.name; };

        var stackedBarX = function (d) { return binsScale(d.x); };

        var stackedBarY = function (d) { return yScaleColumnGraph(d.y0 + d.y); };

        var stackedBarBaseY = function (d) { return yScaleColumnGraph(d.y0); };

        var stackedBarWidth = binsScale.rangeBand();

        var groupedBarX = function (d, i, j) { return binsScale(d.x) + j * groupedBarWidth(); };

        var groupedBarY = function (d) { return yScaleColumnGraph(d.y); };

        var groupedBarBaseY = columnGraphHeight;

        var groupedBarWidth = function () { return binsScale.rangeBand() / numEnabledSeries; };

        var barHeight = function (d) { return heightScale(d.y); };

        var transitionStackedBars = function (selection) {
            selection.transition()
                .duration(animationDuration)
                .delay(barDelay)
                .attr("y", stackedBarY)
                .attr("height", barHeight);
        };

        var columnGraphSvg = d3.select(".js-stacked-chart")
        .attr("width", containerWidth)
        .attr("height", containerHeight);

        columnGraphSvg.selectAll("*").remove();

        var mainArea = columnGraphSvg.append("g")
        .attr("class", "main-area")
        .attr("transform", "translate(" + columnGraphMargin.left + "," + columnGraphMargin.top + ")");

        mainArea.append("g")
            .attr("class", "grid-lines")
            .selectAll(".grid-line").data(yScaleColumnGraph.ticks(numYAxisTicks))
            .enter().append("line")
            .attr("class", "grid-line")
            .attr("x1", 0)
            .attr("x2", columnGraphWidth)
            .attr("y1", yScaleColumnGraph)
            .attr("y2", yScaleColumnGraph);

        var layersArea = mainArea.append("g")
        .attr("class", "layers");

        var layers = layersArea.selectAll(".layer").data(data)
        .enter().append("g")
        .attr("class", layerClass);

        layers.selectAll("rect").data(function (d) { return d.values; })
            .enter().append("rect")
            .attr("x", stackedBarX)
            .attr("y", columnGraphHeight)
            .attr("width", stackedBarWidth)
            .attr("height", 0)
            .call(transitionStackedBars);

        mainArea.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + columnGraphHeight + ")")
            .call(xAxisColumnGraph);

        mainArea.append("g")
            .attr("class", "y axis")
            .call(yAxisColumnGraph);

        columnGraphSvg.append("rect")
            .attr("class", "overlay")
            .attr("transform", "translate(" + columnGraphMargin.left + "," + columnGraphMargin.top + ")")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", columnGraphWidth)
            .attr("height", columnGraphHeight)
            .on("mousemove", showTooltip)
            .on("mouseout", hideTooltip);

        var legendSeries = columnGraphSvg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(" + legendX + "," + legendY + ")")
        .selectAll("g").data(columnGraphDelayTypes)
        .enter().append("g")
        .attr("class", legendSeriesClass)
        .attr("transform", function (d, i) { return "translate(0," + (i * legendSeriesHeight) + ")"; })
        .on("click", toggleSeries);

        legendSeries.append("rect")
            .attr("class", "series-box")
            .attr("x", legendSeriesBoxX)
            .attr("y", legendSeriesBoxY)
            .attr("width", legendSeriesBoxWidth)
            .attr("height", legendSeriesBoxHeight);

        legendSeries.append("text")
            .attr("class", "series-label")
            .attr("x", legendSeriesLabelX)
            .attr("y", legendSeriesLabelY)
            .text(String);


        d3.selectAll(".js-stacked-chart-container input").on("change", changeChartMode);


        //Toggles a certain series.
        function toggleSeries (seriesName) {
            var series,
                isDisabling,
                newData;

            series = _.findWhere(data, { name: seriesName });
            isDisabling = !series.disabled;

            if (isDisabling === true && numEnabledSeries === 1) {
                return;
            }

            d3.select(this).classed("disabled", isDisabling);

            series.disabled = isDisabling;
            newData = stack(enabledSeries());
            numEnabledSeries = newData.length;
            layers = layers.data(newData, joinKey);

            if (isDisabling === true) {
                removeSeries();
            }
            else {
                addSeries();
            }
        }


        //Removes a certain series.
        function removeSeries () {
            var layerToBeRemoved;

            layerToBeRemoved = layers.exit();
            if (chartMode === "stacked") {
                removeStackedSeries(layerToBeRemoved);
            }
            else {
                removeGroupedSeries(layerToBeRemoved);
            }
        }

        //Smoothly transitions and then removes a certain series when the chart is in `stacked` mode.
        function removeStackedSeries (layerToBeRemoved) {
            layerToBeRemoved.selectAll("rect").transition()
                .duration(animationDuration)
                .delay(barDelay)
                .attr("y", stackedBarBaseY)
                .attr("height", 0)
                .call(endAll, function () {
                layerToBeRemoved.remove();
            });

            transitionStackedBars(layers.selectAll("rect"));
        }


        //Smoothly transitions and then removes a certain series when the chart is in `grouped` mode.
        function removeGroupedSeries (layerToBeRemoved) {
            layerToBeRemoved.selectAll("rect").transition()
                .duration(animationDuration)
                .delay(barDelay)
                .attr("y", groupedBarBaseY)
                .attr("height", 0)
                .call(endAll, function () {
                layerToBeRemoved.remove();

                layers.selectAll("rect").transition()
                    .duration(animationDuration)
                    .delay(barDelay)
                    .attr("x", groupedBarX)
                    .attr("width", groupedBarWidth);
            });
        }



        //Adds a certain series.
        function addSeries () {
            var newLayer;

            newLayer = layers.enter().append("g")
                .attr("class", layerClass);

            if (chartMode === "stacked") {
                addStackedSeries(newLayer);
            }
            else {
                addGroupedSeries(newLayer);
            }
        }

        //Smoothly transitions and adds a certain series when the chart is in `stacked` mode.
        function addStackedSeries (newLayer) {
            newLayer.selectAll("rect").data(function (d) { return d.values; })
                .enter().append("rect")
                .attr("x", stackedBarX)
                .attr("y", stackedBarBaseY)
                .attr("width", stackedBarWidth)
                .attr("height", 0);

            transitionStackedBars(layers.selectAll("rect"));
        }

        //Smoothly transitions and adds a certain series when the chart is in `grouped` mode.
        function addGroupedSeries (newLayer) {
            var newBars;

            layers.selectAll("rect").transition()
                .duration(animationDuration)
                .delay(barDelay)
                .attr("x", groupedBarX)
                .attr("width", groupedBarWidth)
                .call(endAll, function () {
                newBars = newLayer.selectAll("rect").data(function (d) { return d.values; })
                    .enter().append("rect")
                    .attr("y", groupedBarBaseY)
                    .attr("width", groupedBarWidth)
                    .attr("height", 0);

                layers.selectAll("rect").attr("x", groupedBarX);

                newBars.transition()
                    .duration(animationDuration)
                    .delay(barDelay)
                    .attr("y", groupedBarY)
                    .attr("height", barHeight);
            });
        }


        //Changes the chart to the selected mode: `stacked` or `grouped`.
        function changeChartMode() {
            chartMode = this.value;
            if (chartMode === "stacked") {
                stackBars();
            }
            else {
                groupBars();
            }
        }


        //Smoothly transitions the chart to `stacked` mode.
        function stackBars() {
            layers.selectAll("rect").transition()
                .duration(animationDuration)
                .delay(barDelay)
                .attr("y", stackedBarY)
                .transition()
                .duration(animationDuration)
                .attr("x", stackedBarX)
                .attr("width", stackedBarWidth);
        }


        //Smoothly transitions the chart to `grouped` mode.
        function groupBars() {
            layers.selectAll("rect").transition()
                .duration(animationDuration)
                .delay(barDelay)
                .attr("x", groupedBarX)
                .attr("width", groupedBarWidth)
                .transition()
                .duration(animationDuration)
                .attr("y", groupedBarY);
        }



        //Shows the tooltip.
        function showTooltip() {
            var hoveredBarIndex,
                tooltip;

            hoveredBarIndex = (d3.mouse(this)[0] / widthPerStack) | 0;
            if (hoveredBarIndex === lastHoveredBarIndex) {
                return;
            }
            lastHoveredBarIndex = hoveredBarIndex;

            layers.selectAll("rect").classed("highlighted", function (d, i) { return (i === hoveredBarIndex); });

            tooltip = $(".js-tooltip");
            tooltip.find(".js-tooltip-table").html(tooltipContent());
            tooltip.css({
                top:  columnGraphMargin.top  + highestBinBarHeight() - tooltip.outerHeight() - tooltipBottomMargin,
                left: columnGraphMargin.left + (hoveredBarIndex * widthPerStack) + (widthPerStack / 2) - (tooltip.outerWidth() / 2),
            }).fadeIn();
        }

        function tooltipContent () {
            var bars;

            bars = [];
            layers.each(function (d) {
                bars.unshift({ name: d.name, value: d.values[lastHoveredBarIndex].y.toFixed(4) });
            });

            return tooltipTemplate({ bars: bars });
        }


        //Hides the tooltip.
        function hideTooltip () {
            $(".js-tooltip").stop().hide();

            layers.selectAll("rect")
                .filter(function (d, i) { return (i === lastHoveredBarIndex); })
                .classed("highlighted", false);

            lastHoveredBarIndex = undefined;
        }


        //Calculates the height of the highest (not tallest) bar within a certain bin.
        function highestBinBarHeight() {
            var bars,
                highestGroupBar;

            if (chartMode === "stacked") {
                highestGroupBar = _.last(layers.data()).values[lastHoveredBarIndex];
                return yScaleColumnGraph(highestGroupBar.y0 + highestGroupBar.y);
            }
            else {
                bars = _.map(layers.data(), function (series) { return series.values[lastHoveredBarIndex]; });
                highestGroupBar = _.max(bars, function (bar) { return bar.y; });
                return yScaleColumnGraph(highestGroupBar.y);
            }
        }


        //Called at the end of all transitions.
        function endAll (transition, callback) {
            var n;

            if (transition.empty()) {
                callback();
            }
            else {
                n = transition.size();
                transition.each("end", function () {
                    n--;
                    if (n === 0) {
                        callback();
                    }
                });
            }
        }


        //Filter and structure data to work with both stacked and grouped bar charts
        function filterData(year, month) {
            var dat = [];
            columnGraphDelayTypes.forEach(function (cd) {
                var dt = {name: cd, values: []};
                var i=1;
                var dtFullString = cd + " Delay Percentage";
                delaydataset.forEach(function (d) {
                    if(d["Airport"] == selectedCircle.__data__["Airport IATA"] && d["Year"] == year && d["Month"] == month) {
                        var val = +d[dtFullString];
                        var obj = {x: i, y: val};
                        dt.values.push(obj);
                        i++;
                    }
                });
                dat.push(dt);
            });
            return dat;
        }

    }
}
