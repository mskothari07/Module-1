var $ = function (id) {
  return document.getElementById(id);
};

var stateCodeLookup = function (stateCode) {
  var states = ["CA", "WA", "OR", "NV", "NM", "AZ", "WY", "MT"];
  states.push("TX");
  stateCode = stateCode.toUpperCase();
  for (var i = 0; i < states.length; i++) {
    if (states[i] == stateCode) {
      return true;
    }
  }
  return false;
};
var joinList = function () {
  var emailAddress1 = $("email_address1").value;
  var emailAddress2 = $("email_address2").value;
  var isValid = true;

  //1st email validation

  if (emailAddress1 == "") {
    $("email_address1_error").firstChild.nodeValue = "This Field is required.";
    isValid = false;
  } else {
    $("email_address1_error").firstChild.nodeValue = " ";
  }

  //2nd email validation

  if (emailAddress2 == "") {
    $("email_address2_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else if (emailAddress1 !== emailAddress2) {
    $("email_address2_error").firstChild.nodeValue =
      "Both Email Id must be same";
    isValid = false;
  } else {
    $("email_address2_error").firstChild.nodeValue = " ";
  }

  // first name validation

  if ($("first_name").value == "") {
    $("first_name_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else {
    $("first_name_error").firstChild.nodeValue = "";
  }

  //State code validation

  // validate the state code entry
  var stateCode = $("state_code").value;
  if (!stateCodeLookup(stateCode)) {
    $("state_code_error").firstChild.nodeValue = "State code is invalid.";
    isValid = false;
  } else {
    $("state_code_error").firstChild.nodeValue = "";
  }

  // submit the form if all entries are valid
  if (isValid) {
    $("email_form").submit();
  }
};
window.onload = function () {
  $("join_list").onclick = joinList;
  $("email_address1").focus();
};
