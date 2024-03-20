var legend = svg.selectAll('.maplegend')                     // NEW
.data(color.domain())                                   // NEW
.enter()                                                // NEW
.append('g')                                            // NEW
.attr('class', 'legend')                                // NEW
.attr('transform', function(d, i) {                     // NEW
    var height = legendRectSize + legendSpacing;          // NEW
    var offset =  height * color.domain().length / 2;     // NEW
    var horz = -2 * legendRectSize;                       // NEW
    var vert = i * height - offset;                       // NEW
    return 'translate(' + horz + ',' + vert + ')';        // NEW
});     