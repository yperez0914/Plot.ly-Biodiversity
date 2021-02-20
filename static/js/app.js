function buildMetadata(sample){
    d3.json("static/js/samples.json").then((data) => { 
        var metadata = data.metadata;
        var table = d3.select("#sample-metadata");
        table.html("")
        var filteredData = metadata.filter(i  => i.id === parseInt (sample))[0];
        console.log(metadata);
       
        
        Object.entries(filteredData).forEach(([key,value]) => {
            table.append("div").text(`${key}: ${value}`);
        })
        console.log(filteredData);
        })
       
    
}

function buildCharts (sample){
    d3.json("static/js/samples.json").then((data) => {
    // Use sample_values as the values for the bar chart.
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.
    var sample_values = data.samples.sample_values;
    console.log(`${sample_values}`);
    var sample_slice =sample_values.slice(0,10);
    var otu_ids = data.samples.otu_ids;
    var otu_slice = otu_ids.slice(0,10);
    var otu_labels = data.samples.otu_labels; 
    console.log(sample_slice);
    console.log(sample_values);
    // Chart 1
    var layout = {
        title: "Bacterial Samples"
        };
        // HINT: You will need to use slice() to grab the top 10 sample_values,
        // otu_ids, and labels (10 each).
        var bac = [{
        // x: sample_values.slice(0, 11),
        // y: otu_ids.slice(0, 11),
        x: sample_slice,
        y: otu_slice,
        type: "bar",
        orientation: 'h'
        }];
        Plotly.newPlot("bar", bac, layout, {responsive: true});
    //Chart 2
        var trace = [{
        x: otu_slice,
        y: sample_slice,
        text: otu_labels,
        mode: 'markers',
        marker: {
            size:sample_values,
            color: otu_ids
        }
        }];
        var layout2 = {
        title: "Bacterial Bubble Chart",
        showlegend: false
        };
        Plotly.newPlot("bubble", trace, layout2, {responsive: true});
    })
    }



function init(){
    d3.json("static/js/samples.json").then((data) => {
        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        
            var id_names = data.names;
            var dropdown = d3.select("#selDataset");
            id_names.forEach(id => {
                var option = dropdown.append("option");
                option.text(id);
                option.property("value", id);
            });
            var first_sample= id_names[0];
            buildMetadata(first_sample);
            buildCharts(first_sample);



})
}




function optionChanged(sample) {
    
    var dropdown = d3.select("#onChange");
    console.log(sample);
    dropdown.on("change", buildMetadata(sample)).on("change", buildCharts(value));
}

init();