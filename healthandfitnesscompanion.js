// quiz.js
function showSuggestion() {
  const goal = document.getElementById("goal").value;
  let message = "";

  switch(goal) {
    case "lose":
      message = "Try HIIT workouts and maintain a calorie deficit.";
      break;
    case "gain":
      message = "Focus on strength training and protein-rich foods.";
      break;
    case "maintain":
      message = "Maintain a balanced diet and regular cardio.";
      break;
    default:
      message = "Please select a valid goal.";
  }

  document.getElementById("suggestion").innerText = message;
}
