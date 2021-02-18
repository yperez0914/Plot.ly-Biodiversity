// Read in the samples data
d3.json("static/js/samples.json").then((data) => {
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    var id_names = data.names;
    var dropdown = d3.select("#selDataset");
    id_names.forEach(id => {
        var option = dropdown.append("option");
        option.text(id);
        option.property("value", id);
    });
});
function optionChanged(value) {
    console.log(value);
    // SOME CODE THAT ACTUALLY SELECTS THE DATA AND PLOTS IT
}
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

// var trace1 = [{
//     type: 'bar',
//     x: data.map(row => row.pair),
//     y: data.map(row => row.greekSearchResults),
//     text: data.map(row => row.greekName),
//     orientation: 'h'
//   }];
  
//   Plotly.newPlot('#bar', data);