$( "#search-form" ).submit(function( event ) {
  event.preventDefault();
  const value = document.getElementById('textarea1').value
  console.log(value);
  $('#search-form')[0].reset();
  let queryUrl ="https://developer.nps.gov/api/v1/parks?stateCode=" + value + "&api_key=a3wuSw2Td9o5F68gcq0f7e4Q8HzlBztPwFUaHzZ5&limit=10"; 
  $.ajax({
      url: queryUrl,
      method: "GET"
  }).then(function(response){
      let results = response.data;
      console.log(results)
          for (var i = 0; i < results.length; i++) {
          var natParkDiv = $("<tr>");
          var hThree = $("<td>");
          hThree.text(results[i].fullName);
          var pOne = $("<td>");
          pOne.text(results[i].description);
          var pTwo = $("<td>");
          pTwo.text(results[i].weatherInfo);
          var pThree = $("<td>");
          pThree.text(results[i].url);
          var pFour = $("<td>");
          pFour.attr("latLong", results[i].latLong)
          pFour.text("Click Here!  for trails nearby!");
          pFour.addClass("park");
          natParkDiv.append(hThree);
          natParkDiv.append(pOne);
          natParkDiv.append(pTwo);
          natParkDiv.append(pThree);
          natParkDiv.append(pFour);
          $("tbody").prepend(natParkDiv);
       };
       $(".park").on("click", function() {

          // make a variable named str and then store the latitude and longitude into it.
          let str = $(this).attr("latLong");
          var res = str.split(":");
          var latPark = res[1].slice(0,9);
          var longPark = res[2].slice(0,9);
          var radiusPark = 50;
          console.log(latPark);
          console.log(longPark);
          $("#test2").empty()
        
          // Get queryURL from second API
          let queryURL2 = "https://brappdbv2.p.rapidapi.com/Parks?lat=" + latPark + "&lng=" + longPark + "&dist=" + radiusPark;
          $.ajax({
          beforeSend: function(request) {
              request.setRequestHeader("X-RapidAPI-Host", "brappdbv2.p.rapidapi.com");
              request.setRequestHeader("X-RapidAPI-Key", "142737b765msh4e6adf5613eeba6p165c4djsn661caaa1593e");
              request.setRequestHeader("Authorization", "pu1pBtMLXqcTGc6GnhEyNY4ESYWbTmsIjl59qFGuMu4");
          },
          url: queryURL2,
          method: "GET"
          }).then(function(response) {
      
              console.log(response);
              results2 = response.data;
      
              for (var i = 0; i < results2.length; i++) {
                var columnDiv = $("<div>").addClass("col s8")
                //$("#test2").append(columnDiv)
              var trailParkDiv = $("<div>");
              trailParkDiv.addClass("card blue-grey darken-1")
              var trailParkCard = $("<div>")
              trailParkCard.addClass("card-content white-text")
              var h2Four = $("<h5>");
              h2Four.text("Park : " + results2[i].Name);
              var h2FourAlt = $("<h5>");
              h2FourAlt.text("Also Known As: " + results2[i].AltName);
              var p2One = $("<p>");
              p2One.text("About: " + results2[i].Desc);
              trailParkCard.append(h2Four);
              trailParkCard.append(h2FourAlt);
              trailParkCard.append(p2One);
              trailParkDiv.append(trailParkCard)
              columnDiv.append(trailParkDiv)
              $("#test2").prepend(columnDiv);
              };
          });
       
  })
  //Make section to display Name- alt name- and decription for click here
  //display it on top of park info
  

});
});