
//trigger an autoresize on it afterwords because .val() 
// does not automatically trigger the events we've binded to the textarea.

//   $('#textarea1').val('New Text');
//   M.textareaAutoResize($('#textarea1'));


$("#search-form").submit(function( event ) {
  event.preventDefault();
  const value = document.getElementById('textarea').value
  console.log(value);
  $("#search-form")[0].reset();
  let queryUrl ="https://developer.nps.gov/api/v1/parks?stateCode="+ value +"&api_key=a3wuSw2Td9o5F68gcq0f7e4Q8HzlBztPwFUaHzZ5&limit=10";
  $.ajax({
      url: queryUrl,
      method: "GET"
  }).then(function(response){
      let results = response.data;
      console.log(results)
          for (var i = 0; i < results.length; i++) {
          var natParkDiv = $("<td>");
          var hThree = $("<td>");
          hThree.text(results[i].fullName);
          var pOne = $("<td>");
          pOne.text(results[i].description);
          var pTwo = $("<td>");
          pTwo.text(results[i].weatherInfo);
          var pThree = $("<td>");
          pThree.text(results[i].url);
          natParkDiv.append(hThree);
          natParkDiv.append(pOne);
          natParkDiv.append(pTwo);
          natParkDiv.append(pThree);
          $("tbody").prepend(natParkDiv);
       };
  })
});