// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// change table

function result(filterData){
    // clear first
    tbody.html("")
    filterData.forEach(report => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

result(tableData)

// filter set up

var date_filter = d3.select("#filter-btn");
var reset_filter = d3.select("#reset-btn");
var city_filter = d3.select("#city-btn")

// var to date box button

var date_input = d3.select("#datetime");
var city_input = d3.select("#city");

// link filter function to buttom 

date_filter.on("click" , function(){
    d3.event.preventDefault();
    var date_value = date_input.property("value");
    console.log(date_value)

    var response = tableData.filter(data=>data.datetime===date_value);
    result(response)

})


city_filter.on("click" , function(){
    d3.event.preventDefault();
    var city_value = city_input.property("value");
    console.log(city_value)

    var response = tableData.filter(data=>data.city===city_value);
    result(response)

})

// reset

reset_filter.on("click", function(){
    tbody.html("")
    result(tableData)
    date_input.property("value", "")
})
