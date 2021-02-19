function buildMetadata(sample){
    d3.json("static/js/samples.json").then((data) => { 
        var metadata = data.metadata;
        // var table = d3.select("#sample-metadata");
        var filteredData = metadata.filter(i  => i.id === sample);
        console.log(metadata);
        console.log(filteredData);
        
        // Object.entries(filteredData).forEach(([key,value]) => {
        //     table.append("div").text(`${key}: ${value}`);
        //     console.log(filteredData);
        })
        // })
       
    
}

// function buildCharts (sample){
    // d3.json("static/js/samples.json").then((data) => { 
    // Use sample_values as the values for the bar chart.
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.
    // var sample_values = data.samples.sample_values;
    // var otu_ids = data.samples.otu_ids;
    // var otu_labels = data.samples.otu_labels; 
//     return 
// }

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
            // buildCharts(first_sample);



})
}




function optionChanged(sample) {
    // Prevent the page from refreshing
    // d3.event.preventDefault();
    // d3.json("static/js/samples.json").then((data) => { 
    // Select the dropdown
    var dropdown = d3.select("#onChange");
    // var inputValue = dropdown.property("value");
    console.log(sample);
    // Create event handlers 
    dropdown.on("change", buildMetadata(sample));
    // .on("change", buildCharts(value));
    // })
}

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#patient-form-input");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//     console.log(sample_values);
//     })
// }


// var trace1 = [{
//     type: 'bar',
//     x: 
//     y: 
//     text: 
//     orientation: 'h'
//   }];
  
//   Plotly.newPlot('#bar', data);

init();