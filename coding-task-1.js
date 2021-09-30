const mattScored = 80,
  simonScored = 45,
  passingLimit = 51;

if (mattScored >= passingLimit && simonScored >= passingLimit) {
  console.log(
    `Congrats! They both passed the exam! Matt scored ${mattScored} points, and Simon scored ${simonScored} points.`
  );
} else if (mattScored >= passingLimit || simonScored >= passingLimit) {
  if (mattScored > simonScored) {
    console.log(
      `Matt passed the exam with ${mattScored} points scored, unfortunately Simon failed the exam with ${simonScored} points scored.`
    );
  } else {
    console.log(
      `Simon passed the exam with ${simonScored} points scored, unfortunately Matt failed the exam with ${mattScored} points scored.`
    );
  }
} else {
  console.log(
    `Unfortunately both students failed the exam, Matt scored ${mattScored} points, and Simon scored ${simonScored} points.`
  );
}
