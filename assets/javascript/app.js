//trigger an autoresize on it afterwords because .val() 
// does not automatically trigger the events we've binded to the textarea.

//   $('#textarea1').val('New Text');
//   M.textareaAutoResize($('#textarea1'));


$( "#search-form" ).submit(function( event ) {
    event.preventDefault();
    const value = document.getElementById('textarea1').value
    console.log(value);
    $('#search-form')[0].reset();
    //call api here 



  });
