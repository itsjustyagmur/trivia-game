var questions = [{
  ques: "In the pilot episode, Serena returns to New York City after a year away. Where was she?",
  ans: ["Boarding School", "Searching for her dad in Europe"],
  name: "first",
  correct: "Boarding School",
  divClass: ".Boarding"
},
{
  ques: "Where do Blair and Serena love to eat lunch?",
  ans: ["Palace Hotel", "On the steps of the Metropolitan Museum of Art"],
  name: "eat",
  correct: "On the steps of the Metropolitan Museum of Art",
  divClass: ".eat"
},
{
  ques: "Which of Blair’s parties does Jenny make invitations for in exchange for a spot on the guest list?",
  ans: ["The White Party", "The Kiss On The Lips Party"],
  name: "party",
  correct: "The Kiss On The Lips Party",
  divClass: ".party"
},
{
  ques: "Where do Nate, Chuck, and Dan go to high school?",
  ans: ["The Buckley School", "St.Jude's School for Boys"],
  name: "school",
  correct: "St.Jude's School for Boys",
  divClass: ".school"
},
{
  ques: "Nate’s family on the show claims to be descended from which real-life famous family?",
  ans: ["The Kennedys","The Vanderbilts"],
  name: "fam",
  correct: "The Vanderbilts",
  divClass: ".fam"
},
{
  ques: "Which breakfast food does Rufus serve every chance he gets?",
  ans: ["Waffles", "Pancakes"],
  name: "breakfast",
  correct: "Waffles",
  divClass: ".breakfast"
},
{
  ques: "Serena’s mother Lily has an ex-boyfriend and an ex-husband with almost identical names. What were their names?",
  ans: ["Klaus and Claus", "Jeffrey and Geoffrey"],
  name: "ex name",
  correct: "Klaus and Claus",
  divClass: ".exname"
},
{
  ques: "Which character was played by a different actor or actress in the pilot?",
  ans: ["Lily", "Eleanor"],
  name: "replaced",
  correct: "Eleanor",
  divClass: ".replaced"
},
{
  ques: "What kind of luxury vehicle are Blair and Chuck in when they hook up for the first time?",
  ans: ["Ferrari", "Limo"],
  name: "sex car",
  correct: "Limo",
  divClass: ".sexcar"
},
{
  ques: "What is Blair’s middle name?",
  ans: ["Cornelia", "Cecelia"],
  name: "middlename",
  correct: "Cornelia",
  divClass: ".middlename"
}
]

var labels = ["first", "second", "third", "forth"];

//start//
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});


var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
}

('.questions').prepend('<hr/>');
}

var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
  $('.container').fadeOut(500);
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 0;

  for (var i = 0; i < 10; i++) {

      if ($(questions[i].name + '"]:checked').val() === questions[i].correct) {

          correctAnswers++;
          console.log("Good answer newyorker! number:" + i)
      } else {
          wrongAnswers++;
          console.log("totally wrong! number:" + i)
      };
  }
  $('#correctTimesUp').append(correctAnswers);
 
  $('#wrongTimesUp').append(wrongAnswers);
  $('#timesUp').fadeIn(1000).show();

  clearInterval(timer);
  return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; 
// end countdown


// function to grade quiz//
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
},
);

// loop through correctArray//
for(var i = 0; i < 10; i++) {

if ($(questions[i].name + '"]:checked').val() === questions[i].correct) {

  correctAnswers++;
} else {
  wrongAnswers++;
};
};


countdown();
$('.container').fadeOut(500);
$('#answerScreen').show();
$('#correctScreen').append(correctAnswers);
$('#wrongScreen').append(wrongAnswers);

