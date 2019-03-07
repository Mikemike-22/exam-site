// var results =[Q1, Q2 ,Q3 ,Q4 ,Q5 ,Q6 ]

function testResults(results){
  var sum=0;
  for (var i=0;i<results.length; i++){
    sum+=results[i];
  }
  return sum;
}

   $(document).ready(function(){
  $("#submitButton").click(function(event){


    var Q1 = $("input:radio[name=opt]:checked").val();
    var Q2 = parseInt($("input:radio[name=assgt]:checked").val());
    var Q3 = parseInt($("input:radio[name=java]:checked").val());
    var Q4=
    parseInt($("input:radio[name=met]:checked").val());
    var Q5=
    parseInt($("input:radio[name=one]:checked").val());
    var Q6=
    parseInt($("input:radio[name=user]:checked").val());

    // var result = testResults(Q1, Q2, Q3, Q4, Q5, Q6);
    // document.getElementById("score").innerHTML=result;

    var results = Q1+Q2+Q3+Q4+Q5+Q6;

    var sum = testResults(results);
    $("score").text(sum);
    // $("#score").text( result);
      event.preventDefault();


  });
});
