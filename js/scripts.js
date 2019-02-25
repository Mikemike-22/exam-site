function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
      //code
    }
    function showResults(question, quizContainer, resutsContainer){
      //code
    }
    //show the questions
    showQuestions(questions, quizContainer);

    //when user clicks submit, show results
    submitButton.onclick=function(){

    }
}

var myQuestions =[
  {
    question: "Which is not programming language?"
    answer:{
      a: 'HTML',
      b: 'Java Script',
      c: 'CSS',
      d: 'PHP'
    },
    correctAnswer: 'a'
  },
  {
    question: "Select an assignment operator?"
    answers:{
      a:'!==',
      b:'+=',
      c:'-=',
      d:'='
    },
    correctAnswer:'d'
  },
  {
    question: "which is not the correct java script case?"
    answers: {
      a: 'myNumber',
      b:'lowerCamelCase',
      c:'javaScript',
      d:'2Number'
    },
    correctAnswer:'d'
  },
  {
    question: "which is not used to collect user input? "
    answers:{
      a:'confirm',
      b:'forms',
      c:'prompt',
      d:'alert'
    },
    correctAnswer:'d'
  },
];
function showQuestion(questions,quizContainer){
  var output=[];
  var answers;

  for(var i=0; i<questions.length; i++){
    answers=[];
    for(letter in questions[i].answers){
      answers.push(
        '<label>'
           +'<input type="radio" name="question'+i+'" value="'+letter'">'
           +letter+':'
           +quwestions[i].answers[letter]
        +'</label>'
      );
    }
    output.push(
      '<div class="question">'+ qustions[i].question +'</div>'
      +'<div class="answers">'+answers.join('')+'</div>'
    );
  }
  quizContainer.inerHtml=output.join('');
}
