var card = $("#quiz-area");

// Question set
var questions = [{
  question: "Which word conjucts two words together?",
  answers: ["They're", "There", "Their", "Thurr"],
  correctAnswer: "They're"
}, {
  question: "If I had 10 pieces of candy and ate 4 pieces, how many pieces do I have left?",
  answers: ["3", "6", "4", "0"],
  correctAnswer: "6"
}, {
  question: "If x + y = 20, and y = 10; What is the value of x?",
  answers: ["9", "15", "10", "20"],
  correctAnswer: "10"
}, {
  question: "How many stars are on the American flag?",
  answers: ["50", "48", "30", "28"],
  correctAnswer: "50"
}, {
  question: "If you answered all of these questions correct, what's your score?",
  answers: ["100%", "110%", "50%", "89%"],
  correctAnswer: "100%"

}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },
 
  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

     this.result();

  },


 

  result: function() {
    
    clearInterval(timer);

    $("#sub-wrapper h2").remove();
    
    card.html("<h2>Show me the answers!</h2>" );
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    card.append("<button id='restart'>Play Again!</button>");
  }, 

restart: function() {
    card.empty();
    game.start(); }
    
  


};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});


$(document).on("click", '#restart', function() {
    game.restart();
  
});
