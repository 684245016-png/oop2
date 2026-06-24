let score: number = 85;
let grade: string = "";

console.log("--- Grading Result ---");

if (score > 100) {
    console.log("Error: คะแนนต้องอยู่ระหว่าง 0 ถึง 100");
}
else if (score >= 80) {
    grade = "A";
    console.log("Success Case: Score: " + score + " | Grade: " + grade);
}
else if (score >= 70) {
    grade = "B";
    console.log("Success Case: Score: " + score + " | Grade: " + grade);
}
else if (score >= 60) {
    grade = "C";
    console.log("Success Case: Score: " + score + " | Grade: " + grade);
}
else if (score >= 50) {
    grade = "D";
    console.log("Success Case: Score: " + score + " | Grade: " + grade);
}
else if (score >= 0) {
    grade = "F";
    console.log("Success Case: Score: " + score + " | Grade: " + grade);
}
else {
    console.log("Error: คะแนนต้องอยู่ระหว่าง 0 ถึง 100");
}

console.log("----------------------");