var svg = d3.select("#temp-graph"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    f = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTimeT = d3.timeParse("%Y");

var x = d3.scaleTime()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .domain([-0.44,0.95])
    .rangeRound([height, 0]);

var xAxisT = d3.axisTop(x)
        .tickSize(height);

var yAxisT = d3.axisRight(y)
    .tickSize(width);

var line = d3.line()
    .x(function(e) { return x(e.date); })
    .y(function(e) { return y(e.temp); });

d3.tsv("temp2.tsv", function(e) {
  e.date = parseTimeT(e.date);
  e.temp = +e.temp;
  return e;
}, function(error, data) {
  if (error) throw error;
    
    var dtemp = data;
    
  x.domain(d3.extent(dtemp, function(e) { return e.date; }));
  y.domain(d3.extent(dtemp, function(e) { return e.temp; }));

  f.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(customXAxisTemp);

  f.append("g")
      .call(customYAxisTemp)
    .append("text")
      .attr("fill", "#000")
      .attr("y", 0)
    .attr("x", -10)
      .attr("ey", "1em")
      .attr("text-anchor", "end")
      .text("Celsius")
    .attr("fill","white");
    
  f.append("path")
      .datum(dtemp)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("e", line);
});
    
    function customXAxisTemp(g) {
  g.call(xAxisT);
        g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
        g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-width",0.5);
        g.selectAll(".tick text").attr("y", 20).attr("font-family","Poppins").attr("fill","white");
}

function customYAxisTemp(g) {
g.call(yAxisT);
        g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
        g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-dasharray", "2,2").attr("stroke-width",0.5);
        g.selectAll(".tick text").attr("x", -30).attr("font-family","Poppins").attr("fill","white");
}

/////////////////////////

var co2 = d3.select("#co2-graph"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +co2.attr("width") - margin.left - margin.right,
    height = +co2.attr("height") - margin.top - margin.bottom,
    g = co2.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%d-%b-%Y");

var x = d3.scaleTime()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

    var xAxis = d3.axisTop(x)
        .tickSize(height);

var yAxis = d3.axisRight(y)
    .tickSize(width);

var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

d3.tsv("co2.tsv", function(d) {
  d.date = parseTime(d.date);
  d.close = +d.close;
  return d;
}, function(error, data) {
  if (error) throw error;

    var dco2 = data;
    
  x.domain(d3.extent(dco2, function(d) { return d.date; }));
  y.domain(d3.extent(dco2, function(d) { return d.close; }));

  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(customXAxisCo2);

  g.append("g")
      .call(customYAxisCo2)
    .append("text")
      .attr("fill", "white")
      .attr("y", 0)
    .attr("x", -10)
      .attr("dy", "1em")
      .attr("text-anchor", "end")
      .text("PPM");
    
g.append("path")
      .datum(dco2)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
});
    
    function customXAxisCo2(g) {
  g.call(xAxis);
        g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
    g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-width",0.5);
        g.selectAll(".tick text").attr("y", 20).attr("fill","white");
}

function customYAxisCo2(g) {
  g.call(yAxis);
    g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
  g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-dasharray", "2,2").attr("stroke-width",0.5);
  g.selectAll(".tick text").attr("x", -30).attr("fill","white");
}