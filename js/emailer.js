/* global $,document,console,Parse */
$(document).ready(function() {

  var parseAPPID = "qUuHzxAXp3NzzlzWMucgwRVuwH6J5DzB4TyKxDb0";
  var parseJSID = "Ps8CC01aj7qskZr1bVtbfZdm85OO962wlwUiXm81";

  Parse.initialize(parseAPPID, parseJSID);
  var emailObject = Parse.Object.extend("emailObject");


  $("#commentForm").on("submit", function(e) {
    e.preventDefault();

    console.log("Handling the submit");
    //add error handling here
    //gather the form data

    var data = {};
    data.domain = $("#domain").val();
    data.name = $("#name").val();
    data.email = $("#email").val();
    data.message = $("#message").val();

    var comment = new emailObject();
    comment.save(data, {
      success:function() {
        console.log("Success");
        $('#response').html('Email successful!').addClass('success').fadeIn('fast');
        $('#commentForm')[0].reset();
      },
      error:function(e) {
        console.dir(e);
        $('#response').html('Error! Email unsuccessful!').addClass('error').fadeIn('fast');
        $('#commentForm')[0].reset();
      }
    });
  });
});
