//trigger an autoresize on it afterwords because .val() 
// does not automatically trigger the events we've binded to the textarea.

//   $('#textarea1').val('New Text');
//   M.textareaAutoResize($('#textarea1'));


$( "#search-form" ).submit(function( event ) {
  event.preventDefault();
  const value = document.getElementById('textarea1').value
  console.log(value);
  $('#search-form')[0].reset();
  let queryUrl ="https://developer.nps.gov/api/v1/parks?stateCode=" + value + "&api_key=a3wuSw2Td9o5F68gcq0f7e4Q8HzlBztPwFUaHzZ5"; 
  $.ajax({
      url: queryUrl,
      method: "GET"
  }).then(function(response){
      console.log(response)
      console.log(response.data.fullName)
  })

});