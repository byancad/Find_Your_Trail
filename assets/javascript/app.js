//trigger an autoresize on it afterwords because .val() 
// does not automatically trigger the events we've binded to the textarea.

  $('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));
  console.log(val)