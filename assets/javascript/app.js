$( "#search-form" ).submit(function( event ) {
    event.preventDefault();
    const value = document.getElementById('textarea1').value
    console.log(value);
    $('#search-form')[0].reset();
    let queryUrl ="https://developer.nps.gov/api/v1/parks?stateCode=" + value + "&api_key=idUsp6hPTKkQWBpcVGAqTDtC3kb2vG1HhrCpt8lW&limit=10"; 
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
            // var pfour = $("<td>");
            // pFour.attr("latLong", results[i].latLong)
            // pFour.text("Search other exciting outdoor trails and activities within a 50 mile radius! Click here!");
            // pFour.addClass("park");
            natParkDiv.append(hThree);
            natParkDiv.append(pOne);
            natParkDiv.append(pTwo);
            natParkDiv.append(pThree);
            // natParkDiv.append(pFour);
            $("tbody").prepend(natParkDiv);
         };
        //  $(".park").on("click", function() {

        //     // make a variable named str and then store the latitude and longitude into it.
        //     let str = $(this).attr("latLong");
        //     var res = str.split(":");
        //     var latPark = res[1].slice(0,9);
        //     var longPark = res[2].slice(0,9);
        //     var radiusPark = 50;
        //     console.log(latPark);
        //     console.log(longPark);
          
        //     // Get queryURL from second API
        //     let queryURL2 = "https://brappdbv2.p.rapidapi.com/Parks?lat=" + latPark + "&lng=" + longPark + "&dist=" + radiusPark;
        //     $.ajax({
        //     beforeSend: function(request) {
        //         request.setRequestHeader("X-RapidAPI-Host", "brappdbv2.p.rapidapi.com");
        //         request.setRequestHeader("X-RapidAPI-Key", "142737b765msh4e6adf5613eeba6p165c4djsn661caaa1593e");
        //         request.setRequestHeader("Authorization", "pu1pBtMLXqcTGc6GnhEyNY4ESYWbTmsIjl59qFGuMu4");
        //     },
        //     url: queryURL2,
        //     method: "GET"
        //     }).then(function(response) {
        
        //         console.log(response);
        //         results2 = response.data;
        
        //         for (var i = 0; i < results2.length; i++) {
        //         var trailParkDiv = $("<div>");
        //         var h2Four = $("<h4>");
        //         h2Four.text("Park : " + results2[i].Name);
        //         var h2FourAlt = $("<h4>");
        //         h2FourAlt.text("Also Known As: " + results2[i].AltName);
        //         var p2One = $("<p>");
        //         p2One.text("About: " + results2[i].Desc);
        //         trailParkDiv.append(h2Four);
        //         trailParkDiv.append(h2FourAlt);
        //         trailParkDiv.append(p2One);
        //         $("#test2").prepend(trailParkDiv);
        //         };
        //     });
         
    })

  });
// });