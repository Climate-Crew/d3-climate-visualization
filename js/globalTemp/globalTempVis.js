//URL for data to be pulled from, define arrays and variables to be used
var ajaxUrl = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json',
    mydata, yearsArray = [], yearStringArray = [], tempArray = [];
var months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

//upon ajax request being done, run code to set up graph
function runningData() {
    var toolTips = d3.selectAll('div.heat-map-data') //on hover, show this tooltip in graph
        .data(mydata.monthlyVariance)
        .enter().append('div')
        .attr('class', 'heat-map-data')
        .attr('id', function(d,i) { return i; })
        .style('display', 'none')
        .html(function(d,i) {
            return '<h1>' + months[d.month - 1] + ' ' + d.year + '</h1><p>' + (d.variance + 8.66).toFixed(3) + ' C &#176;</p></div>'
        });

    var h = 600;
    var w = window.innerWidth * .80;
    var yPadding = 50;
    var xPadding = 50;

    var xScale = d3.scaleTime() //based off years, greater to the right
        .domain([new Date(d3.min(yearsArray), 0), new Date(d3.max(yearsArray), 0)])
        .range([xPadding + 30, w - (xPadding + 15)]);

    var colorScale = d3.scaleLinear() //color scale
        .domain([d3.min(tempArray), d3.max(tempArray)])
        .range(['white', 'orangered']);

    var yScale = d3.scaleLinear() //based off months
        .domain([1, 12])
        .range([yPadding, h - (yPadding * 2)]);

    var mapSvg = d3.select('#globalTemp').append('svg') //base svg for heat map to go to
        .attr('id', 'globalTemp-svg')
        .attr('height', h)
        .attr('width', w + 100)
        .attr('x', -50);

    var xAxis = d3.axisBottom(xScale)
        .ticks(d3.timeYear.every(20));

    // top reference with regards to what colors mean what
    var legend = mapSvg.append('g')
        .attr('width', 300)
        .attr('height', 40)
        .attr('transform', 'translate(' + (w/3 - 50) + ', 20)');



    //Gradient in legend
    const widthG = 200;
    const svgHeightG = 40;
    const barHeightG = 10;
    const textHeightG = 12;

    const paddingG = 20;
    const nTicksG = 6; // 0, 20, 40, 60, 80, 100;

    const colorsG = [
        {r: 255, g: 255, b: 255},
        {r: 255, g: 69, b: 0},
    ];
// Add gradient line
    let svgGradient = legend
        .append("svg")
        .attr("width", width / 2.5)
        .attr("height", svgHeightG)
        .attr("x", 0)

    let defs = svgGradient.append("defs");
    let mainGradient = defs.append('linearGradient')
        .attr('id', 'mainGradient');
    mainGradient.selectAll("stop")
        .data(colorsG)
        .enter().append("stop")
        .attr("offset", function(d, x) { return `${x*20}%`; })
        .attr("stop-color", function(d) { return `rgb(${d.r}, ${d.g}, ${d.b})`; });
    svgGradient.append('rect')
        .classed('filled', true)
        .attr('x', paddingG)
        .attr('width', width)
        .attr('height', barHeightG * 1.5);

    // const tickFormat = d3.format("0.1");
    // const ticksG = new Array(nTicksG)
    //     .fill()
    //     .map(function(e, i) { return i / (nTicksG - 1)});
    //
    // const ticksContainer = svgGradient.append('g')
    //     .classed('ticks', true)
    //     .style('transform', 'translate(' + paddingG/2 + 'px, ' + barHeightG + 'px)');
    //
    // ticksContainer
    //     .selectAll('text')
    //     .data(ticksG)
    //     .enter()
    //     .append('text')
    //     .text(tickFormat)
    //     .attr('y', textHeightG)
    //     .attr('x', function(d) { return width * d });

    /////////

    legend.append('text')
        .text('0 °C / 32°F')
        .style("font-size", "12px")
        .attr('y', 12)
        .attr('x', -80);

    // legend.append('rect')
    //     .attr('width', 15)
    //     .attr('height', 15)
    //     .attr('fill', 'white')
    //     .attr('x', 100)
    //     .attr('y', 0);
    //
    legend.append('text')
        .text('15 °C / 59°F')
        .style("font-size", "12px")
        .attr('x', 450)
        .attr('y', 12);
    //
    // legend.append('rect')
    //     .attr('width', 15)
    //     .attr('height', 15)
    //     .attr('fill', 'orangered')
    //     .attr('x', 285)
    //     .attr('y', 0);

    mapSvg.append('g')
        .attr('transform', 'translate( 5,' + (h - yPadding)+ ')')
        .call(xAxis);

    var button = mapSvg.append('g')
        .attr('class', 'button')
        .attr('width', 150)
        .attr('height', 40)
        .attr("fill", "red")
        //.attr('id', 'populate-graph-button')
        .attr('transform', 'translate(' + ((width)/2.2 ) + ',250)')
        .on('click', runMapAnimation);

    //onclick, animation starts, graph populates
    button.append('rect')
        .attr('width', 100)
        .attr('height', 40)
        .attr('fill', '#8771FF')
        .attr('x', 0)
        .attr('y', 0)
        .attr('rx', 5)
        .attr('ry', 5);

    button.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', 100/2)
        .attr('y', 28)
        .style('fill', '#f2f2f2')
        .text('View ▶');

    //populate left side with months
    mapSvg.selectAll('text.y-axis')
        .data(months).enter()
        .append('text')
        .style("font-size", "12px")
        .attr('class', 'y-axis')
        .attr('x', 42)
        .attr('y', function(d,i) {
            return  yScale(i + 1) + 25;
        })
        .text(function(d,i) {return d;});

    //code for data related to each map rectangle representing
    //one month (yaxis) of each year(xaxis) & avg temp(color)
    mapSvg.selectAll('rect.map-rect')
        .data(mydata.monthlyVariance).enter().append('rect')
        .attr('fill', '#f2f2f2')
        .attr('height', function(d,i) { return 0})
        .attr('width', function(d,i) { return 0})
        .attr('x', function(d,i) { w})
        .attr('y', function(d,i) {h})
        .attr('class', function(d,i) {
            return 'map-rect' + ' ' + i;
        })
        .on('mouseover', function() {
            var getTooltip = event.target.className.baseVal.replace('map-rect ', '');
            document.getElementById(getTooltip).style.display = 'inline-block';
            document.getElementById(getTooltip).style.top = event.pageY + 25 + 'px';
            if(event.pageX > (window.innerWidth / 2)) {
                document.getElementById(getTooltip).style.left = event.pageX - 200 + 'px';
            } else{
                document.getElementById(getTooltip).style.left = event.pageX - 200 + 'px';
            };
        })
        .on('mouseout', function() {
            var getTooltip = event.target.className.baseVal.replace('map-rect ', '');
            document.getElementById(getTooltip).style.display = 'none';
        });

    function runMapAnimation() { //animation after click of event button
        mapSvg.selectAll('rect.map-rect')
            .transition()
            .duration(500)
            .delay( function(d,i) {return i;})
            .attr('x', function(d,i) { return xScale(new Date(d.year, d.month)); })
            .attr('y', function(d,i) { return yScale(d.month); })
            .attr('fill', function(d,i) { return colorScale(d.variance); })
            .attr('height', (h / 12) - 8.5)
            .attr('width', yearsArray.length / w + 4);

        mapSvg.select('g.button')
            .style("opacity", 1)
            .transition().duration(400).style("opacity", 0);

        button.select('rect')
            .style("opacity", 1)
            .transition().duration(400).style("opacity", 0);

        // button.select('text')
        //     .transition()
        //     .duration(1000)
        //     .delay(5000)
        //     .text('Hover for details')
        //     .style('fill', 'black')
        //     .style('font-weight', 'bolder')

    }
}

$.getJSON(ajaxUrl, function(data) {
    mydata = data;

    for(var i = 0; i < mydata.monthlyVariance.length; i++) {
        yearsArray.push(mydata.monthlyVariance[i].year);
        tempArray.push(mydata.monthlyVariance[i].variance);
    }

    runningData();
})