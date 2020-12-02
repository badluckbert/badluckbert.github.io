var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 

// --- function: loadDoc() ---

function loadDoc() {
  
  let xhttp = new XMLHttpRequest(); //This local storage implementation is based on
  xhttp.onreadystatechange = function() { //openweathermap and lodash pptx slides.
    if (this.readyState == 4 && this.status == 200){ 
      $("demo").html = this.responseText;  //I shortened this line into jQuery though.
      if (!localStorage.getItem(loans)) //If the loans array isn't found, it will assign it to
        localStorage.setItem(loans, this.responseText); //local storage. Otherwise it loads.
      loans = localStorage.getItem(loans);
    }
  };
  
  let app = angular.module("payments", []); //Angular module
  app.controller("myController", function($scope){ //Angular controller
    
  });
  
  $(document).ready(function(){ //Added the line to begin the jQuery statements
    var defaultYear = parseInt(loans[0].loan_year); //These variable lines are staying the same
    var checkYear = /(196[3-9]|19[7-9]\d|200\d|20[1-4]\d)/; //This is to validate the year entered. The range is 1963 to 2049. From SVSU's founding to a realistic future year for loan payoff.
    var defaultLoanAmount = loans[0].loan_amount; //Continue this pattern. This doesn't change unless there is some special way to declare variables in jQuery that I don't know. 
    $("#loan_amt0" + 1).val = defaultLoanAmount.toFixed(2);
    var defaultInterestRate = loans[0].loan_int_rate;
    $("#loan_int0" + 1).val = defaultInterestRate;
    var loanWithInterest = (loans[0].loan_amount * (1 + loans[0].loan_int_rate));
    $("#loan_bal0" + 1).text= toComma(loanWithInterest.toFixed(2));
    $("#loan_year0" + 1).val = defaultYear++; //$ to begin the jQuery, then changed .value to .val
    
    
    for (var i = 2; i < 6; i++) {
      $("#loan_year0" + i).val(defaultYear++); //In similar fashion to the previous block,
      $("#loan_year0" + i).prop("disabled", true); //Add $ to start the jQuery statement,
      $("#loan_year0" + i).css('background-color', 'gray'); //and convert each method to the jQuery version. 
      $("#loan_year0" + i).css('color', 'white'); // For example, .color becomes .ccs.
      $("#loan_amt0" + i).val(defaultLoanAmount.toFixed(2));
      $("#loan_int0" + i).val(defaultInterestRate);
      $("#loan_int0" + i).prop("disabled", true);
      $("#loan_int0" + i).css('background-color', 'gray');
      $("#loan_int0" + i).css('color', 'white');
      loanWithInterest = ((loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate));
      $("loan_bal0" + i).text = toComma(loanWithInterest.toFixed(2));
    } // end: "for" loop
  
  // all input fields: select contents on fucus
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  });
  if(defaultYear.match(checkYear)){ //This uses the regex from earlier to check if the input year matches the specified set.
      $('#result') // if it doesn't, an error message will appear. 
        .css('color','red')
        .text("Please enter a year from SVSU's founding in 1963 or later.");
  };
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
  });
  
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();
  $("#loan_year01").blur( function() {
    updateLoansArray();
  });
  });
} // end: function loadDoc()


function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateLoansArray() {
  loans[0].loan_year = parseInt($("#loan_year01").val());
  
  for(var i=1; i<5; i++) {
    loans[i].loan_year = loans[0].loan_year + i;
    $("#loan_year0"+ (i+1) ).val(loans[i].loan_year);
  }
}
