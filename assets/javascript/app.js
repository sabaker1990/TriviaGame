var correct = 1;
var incorrect = 1;
var timer = 15;

var trivia = {
	question1: "What is my favorite color?",
	question2: "What is my dog's name?",
	question3: "What is my birth year?",
	answer1: ["yellow", "pink", "blue"],
	answer2: ["Eddy", "Bosco", "Tootie"],
	answer3: ["1972", "2000", "1990"],
}

$(document).ready(function(){
	$("#trivia").hide();
	$("#results").hide();

	$("#button-1").on("click", function() {
		$("#button-1").hide();
		$("#trivia").show();
	})

	$(".q1").html(trivia.question1);
	$(".q2").html(trivia.question2);
	$(".q3").html(trivia.question3);

	$("#a1-1").html(trivia.answer1[0]);
	$("#a1-2").html(trivia.answer1[1]);
	$("#a1-3").html(trivia.answer1[2]);

	$("#a2-1").html(trivia.answer2[0]);
	$("#a2-2").html(trivia.answer2[1]);
	$("#a2-3").html(trivia.answer2[2]);

	$("#a3-1").html(trivia.answer3[0]);
	$("#a3-2").html(trivia.answer3[1]);
	$("#a3-3").html(trivia.answer3[2]);

$("#button-2").on("click", function() {
	$("#button-2").hide();
	$("#trivia").hide();
	$("#results").show();
	})

});