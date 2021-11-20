
class StackedAreaChart {

// constructor method to initialize StackedAreaChart object
    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data = data;
        this.displayData = Array.from(d3.group(this.data[0], d => d.Entity))[0][1]

        console.log("Stacked Area Chart Data:", this.displayData)

        this.dataCategories = [];

        for (let k in this.displayData[0]) {

            if (k != "Year")
                this.dataCategories.push(k)
            if (k == "Year")
                continue
        }

    }

    /*
     * Method that initializes the visualization (static content, e.g. SVG area or axes)
     */
    initVis(){
        let vis = this;

        vis.margin = {top: 40, right: 20, bottom: 370, left: 0};

        vis.width = document.getElementById(vis.parentElement).getBoundingClientRect().width - vis.margin.left - vis.margin.right;
        vis.height = document.getElementById(vis.parentElement).getBoundingClientRect().height - vis.margin.top - vis.margin.bottom

        console.log(vis.width)
        console.log(vis.height)

        // SVG drawing area
        vis.svg = d3.select("#" + vis.parentElement).append("svg")
            .attr("width", vis.width + vis.margin.left + vis.margin.right)
            .attr("height", vis.height + vis.margin.top + vis.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");

        // List of groups = header of the csv files
        vis.keys = vis.data[0].columns.slice(1)

        // Add X axis
        vis.x = d3.scaleTime()
            .domain(d3.extent(vis.data[0], function(d) { return d.Year; }))
            .range([ 0, vis.width ]);

        // vis.svg.append("g")
        // 	.attr("transform", "translate(0," + vis.height*0.6 + ")")
        // 	.call(d3.axisBottom(vis.x).tickSize(- vis.height*.7).tickValues([1900, 1925, 1975, 2000]))
        // 	.select(".domain").remove()

        // Customization
        vis.svg.selectAll(".tick line").attr("stroke", "#b8b8b8")

        // Add X axis label:
        vis.svg.append("text")
            .attr("text-anchor", "end")
            .attr("x", vis.width - 100)
            .attr("y", vis.height - 400)
            .text("Time (year)");

        // Add Y axis
        vis.y = d3.scaleLinear()
            .domain([0, 1.8E10])
            .range([ vis.height, 0 ]);

        // color palette
        vis.color = d3.scaleOrdinal()
            .domain(vis.keys)
            .range(d3.schemeAccent);

        //stack the data?
        vis.stackedData = d3.stack()
            .offset(d3.stackOffsetSilhouette)
            .keys(vis.keys)
            (vis.data[0])

        // create a tooltip
        vis.Tooltip = vis.svg
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .style("opacity", 0)
            .style("font-size", 20)

        // Three function that change the tooltip when user hover / move / leave a cell
        var mouseover = function(d) {
            vis.Tooltip.style("opacity", 1)
            d3.selectAll(".myArea").style("opacity", .2)
            d3.select(this)
                .style("stroke", "black")
                .style("opacity", 1)
        }
        var mousemove = function(d,i) {
            vis.Tooltip.text(i.key)
        }
        var mouseleave = function(d) {
            vis.Tooltip.style("opacity", 0)
            d3.selectAll(".myArea").style("opacity", 1).style("stroke", "none")
        }

        // Area generator
        vis.area = d3.area()
            .x(function(d) { return vis.x(d.data.Year); })
            .y0(function(d) { return vis.y(d[0]); })
            .y1(function(d) { return vis.y(d[1]); })

        // Show the areas
        vis.svg
            .selectAll("mylayers")
            .data(vis.stackedData)
            .enter()
            .append("path")
            .attr("class", "myArea")
            .style("fill", function(d) { return vis.color(d.key); })
            .attr("d", vis.area)
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)

        vis.xAxis = d3.axisBottom()
            .scale(vis.x);

        // Append x-axis
        vis.svg.append("g")
            .attr("class", "x-axis axis")
            .attr("transform", "translate(0," + vis.height + ")")
            .call(vis.xAxis);

    }
}