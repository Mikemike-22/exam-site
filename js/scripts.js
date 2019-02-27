var testResults = function(Q1, Q2 ,Q3 ,Q4 ,Q5 ,Q6 ){
return Q1+Q2+Q3+Q4+Q5+Q6;


}
   $(document).ready(function(){
  $("form#test").submit(function(event){

    var Q1 = parseInt($("input:radio[name=opt]:checked").val());
    var Q2 = parseInt($("input:radio[name=assgt]:checked").val());
    var Q3 = parseInt($("input:radio[name=java]:checked").val());
    var Q4=
    parseInt($("input:radio[name=met]:checked").val());
    var Q5=
    parseInt($("input:radio[name=one]:checked").val());
    var Q6=
    parseInt($("input:radio[name=user]:checked").val());

    var result = testResults(Q1, Q2, Q3, Q4, Q5, Q6);

    $("#score").text("your score is:"+ result);
      event.preventDefault();


  });
});
