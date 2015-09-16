var replaceWord = function(userString, userMatch, userReplacement) {
  var regExpression = new RegExp(userMatch, "ig");
  var resultString = userString.replace(regExpression, userReplacement);
  if (resultString !== userString) {
    return resultString;
  } else {
    return 'word has no match';
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
    if (result === "word has no match") {
      $(".no-replace").show();
    } else {
      $(".replaced").show().text(result);
    }
    event.preventDefault();
  });
});
