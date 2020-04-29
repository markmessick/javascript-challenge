var tableData = data;

// Create the table

var tbody = d3.select("tbody");

tableData.forEach(function(ufoSightings){
    var row = tbody.append("tr")
    Object.entries(ufoSightings).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    });
});


// Listen for input

var form = d3.select("form")
var button = d3.select("#filter-btn")

form.on("submit", filterTable);
button.on("click", filterTable);


// Filter the table

function filterTable() {

    d3.event.preventDefault();
    var inputData = d3.select("#datetime");
    var inputValue = inputData.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    tableData.forEach(function(){
        d3.select("tr").remove();
    });

    filteredData.forEach(function(newTable){
        var newRow = tbody.append("tr")
        Object.entries(newTable).forEach(function([key, value]){
            var newCell = newRow.append("td");
            newCell.text(value);
        });
    });

};

