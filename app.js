var str = "lat:35.5819662, long:-101.6717008";
var res = str.split(":");
var latPark = res[1].slice(0,9);
var longPark = res[2].slice(0,9);
var radiusPark = 50;
console.log(latPark);
console.log(longPark);

// var big = "big";
  
// Get queryURL from Rapid API somehow
  var queryURL = "https://brappdbv2.p.rapidapi.com/Parks?lat=" + latPark + "&lng=" + longPark + "&dist=" + radiusPark;
// Function for displaying movie data
// Creating an AJAX call for the specific movie button being clicked
  $.ajax({
  beforeSend: function(request) {
      request.setRequestHeader("X-RapidAPI-Host", "brappdbv2.p.rapidapi.com");
      request.setRequestHeader("X-RapidAPI-Key", "142737b765msh4e6adf5613eeba6p165c4djsn661caaa1593e");
      request.setRequestHeader("Authorization", "pu1pBtMLXqcTGc6GnhEyNY4ESYWbTmsIjl59qFGuMu4");
  },
  url: queryURL,
  method: "GET"
  }).then(function(response) {

    console.log(response);
  
  
  /*
        google.com?search=dog&id=8&
  */
  
  
  });

// $(".park").on("click", function() {

//     var str = $(this).attr("latLong");
//     var radiusPark = 50;
//     var res = str.split(":");
//     var latPark = res[1].slice(0,9);
//     var longPark = res[2].slice(0,9)
//     console.log(latPark);
//     console.log(longPark);
//     var big = "big";
  
//   // Get queryURL from Rapid API somehow
//     var queryURL = "https://brappdbv2.p.rapidapi.com/Parks?namecontains=" + big;
//   // Function for displaying movie data
//   // Creating an AJAX call for the specific movie button being clicked
//     $.ajax({
//     beforeSend: function(request) {
//         request.setRequestHeader("X-RapidAPI-Host", "brappdbv2.p.rapidapi.com");
//         request.setRequestHeader("X-RapidAPI-Key", "142737b765msh4e6adf5613eeba6p165c4djsn661caaa1593e");
//         request.setRequestHeader("Authorization", "pu1pBtMLXqcTGc6GnhEyNY4ESYWbTmsIjl59qFGuMu4");
//     },
//     url: queryURL,
//     method: "GET"
//     }).then(function(response) {
  
//       console.log(response);
    
    
    
    
    
//     });
//   });