function createSoccerViz(){
    d3.csv("../data/worldcup.csv", function(data){
        overallTeamViz(data);
    })

    function overallTeamViz(data){
        d3.select("svg")
            .append("g")
            .attr("id", "teamsG")
            .attr("transform", "translate(50,300)")
            .selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("class", "overallG")
            .attr("transform", function(d,i){ return "translate(" + (i*50) + ", 0)"});

        var teamG = d3.selectAll("g.overallG");
        teamG.append("circle")
            .attr("r",20)
            .style("fill", "pink")
            .style("stroke", "black")
            .style("stroke-width", "1px");

        teamG.append("text")
            .style("text-anchor", "middle")
            .attr("y", 30)
            .style("font-size","10px")
            .text(function(d){ return d.team; });

        var dataKeys = d3.keys(data[0]).filter(function(el){
            return el != "team" && el != "region";
        });

        //console.log(dataKeys);
        d3.select("#controls").selectAll("button.teams")
            .data(dataKeys).enter()
            .append("button")
            .on("click", buttonClick)
            .html(function(d) { return d});
        
        function buttonClick(data){
            
        }
    }
}