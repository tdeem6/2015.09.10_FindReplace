var replaceWord = function(userString, userMatch, userReplace) {
  var regExpression = new RegExp(userFind, "ig");
  var resultString = userString.replace(regExpression, userReplacement);
  if (resultString === userString) {
    return "nada";
  } else {
    return resultString;
  }
};

$(document).ready(function() {
  $("form#find-and-replace").submit(function(event) {
    $(".no-results").hide();
    $(".results").hide();
    var userString = $("input#user-string").val();
    var userMatch = $("input#user-match").val();
    var userReplacement = $("input#user-replacement").val();

    var result = replaceWord(userString, userMatch, userReplacement);
    if (result === "nada") {
      $(".no-replace").show();
    } else {
      $(".replaced").show().text(result);
    }
    event.preventDefault();
  });
});
