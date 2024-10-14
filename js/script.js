/*Add your JavaScript here*/
var winterScore = 0;
var summerScore = 0;
var questionsAnswered = 0;
var result = document.getElementById("result");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var restart = document.getElementById("restart");
q1a1.addEventListener("click", summer);
q1a2.addEventListener("click", winter);
q2a1.addEventListener("click", summer);
q2a2.addEventListener("click", winter);
q3a1.addEventListener("click", winter);
q3a2.addEventListener("click", summer);
restart.addEventListener("click", restartQuiz);
function summer() {
  summerScore += 1;
  questionsAnswered += 1;
  q1();
  q2();
  q3();
  console.log("question count: " + questionsAnswered + "; summer score: " + summerScore);
  if (questionsAnswered == 3) {
    console.log("You finished the quiz!")
    updateResult();
  }
}
function winter() {
  winterScore += 1;
  questionsAnswered += 1;
  q1();
  q2();
  q3();
  console.log("question count: " + questionsAnswered + "; winter score: " + winterScore);
  if (questionsAnswered == 3) {
    console.log("You finished the quiz!");
    updateResult();
  }
}
function updateResult() {
  if (summerScore >= 2) {
    console.log("Your season is summer!");
    result.innerHTML = "Your season is summer!";
  } else if (winterScore >= 2) {
      console.log("You season is winter!");
      result.innerHTML = "Your season is winter!";
  }
}
function restartQuiz() {
  summerScore = 0;
  winterScore = 0;
  questionsAnswered = 0;
  result.innerHTML = "Your result is...";
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  console.log("question count: " + questionsAnswered + "; summer score: " + summerScore + "; winter score: " + winterScore);
}
function q1() {
  if (questionsAnswered == 1){
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
  }
}
function q2() {
  if (questionsAnswered == 2){
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
  }
}
function q3() {
  if (questionsAnswered == 3){
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
  }
}
