const calculate = () => {
  // parse the values of the inputs
  const legpRef = parseInt(document.getElementById("legpRef").value);
  const legexRef = parseInt(document.getElementById("legexRef").value);

  // these are yet unused
  const legcRef = parseInt(document.getElementById("legcRef").value);
  const squatRef = parseInt(document.getElementById("squatRef").value);
  legPressSet1(legpRef);
  legPressSet2(legpRef);
  legExSet1(legexRef);
  legExSet2(legexRef);
  //   ...add more for leg curl and squats
};

const legPressSet1 = (legpRef) => {
  // parse the values of the difficulties
  const difficultyLegpSet1 =
    document.getElementById("difficultyLegpSet1").value;

  // get the different set fields references so we can later modify them
  const legpSet1Vol1 = document.getElementById("legpSet1Vol1");
  const legpSet1Vol2 = document.getElementById("legpSet1Vol2");
  const legpSet1Res1 = document.getElementById("legpSet1Res1");
  const legpSet1Res2 = document.getElementById("legpSet1Res2");

  // modify the set references according to the required math
  if (difficultyLegpSet1 === "easy") {
    legpSet1Vol1.innerHTML = 10;
    legpSet1Vol2.innerHTML = 15;
    legpSet1Res1.innerHTML = legpRef;
    legpSet1Res2.innerHTML = 2 * legpRef;
  }
  if (difficultyLegpSet1 === "hard") {
    legpSet1Vol1.innerHTML = 12;
    legpSet1Vol2.innerHTML = 16;
    legpSet1Res1.innerHTML = legpRef + 10;
    legpSet1Res2.innerHTML = 2 * legpRef + 10;
  }
  if (difficultyLegpSet1 === "brutal") {
    legpSet1Vol1.innerHTML = 13;
    legpSet1Vol2.innerHTML = 18;
    legpSet1Res1.innerHTML = legpRef + 20;
    legpSet1Res2.innerHTML = 2 * legpRef + 20;
  }
};

const legPressSet2 = (legpRef) => {
  // parse the values of the difficulties
  const difficultyLegpSet2 =
    document.getElementById("difficultyLegpSet2").value;

  // get the different set fields references so we can later modify them
  const legpSet2Vol1 = document.getElementById("legpSet2Vol1");
  const legpSet2Vol2 = document.getElementById("legpSet2Vol2");
  const legpSet2Res1 = document.getElementById("legpSet2Res1");
  const legpSet2Res2 = document.getElementById("legpSet2Res2");

  // modify the set references according to the required math
  if (difficultyLegpSet2 === "easy") {
    legpSet2Vol1.innerHTML = 10;
    legpSet2Vol2.innerHTML = 15;
    legpSet2Res1.innerHTML = legpRef;
    legpSet2Res2.innerHTML = 2 * legpRef;
  }
  if (difficultyLegpSet2 === "hard") {
    legpSet2Vol1.innerHTML = 12;
    legpSet2Vol2.innerHTML = 16;
    legpSet2Res1.innerHTML = legpRef + 10;
    legpSet2Res2.innerHTML = 2 * legpRef + 10;
  }
  if (difficultyLegpSet2 === "brutal") {
    legpSet2Vol1.innerHTML = 13;
    legpSet2Vol2.innerHTML = 18;
    legpSet2Res1.innerHTML = legpRef + 20;
    legpSet2Res2.innerHTML = 2 * legpRef + 20;
  }
};

const legExSet1 = (legexRef) => {
  // parse the values of the difficulties
  const difficultyLegexSet1 = document.getElementById(
    "difficultyLegexSet1"
  ).value;

  // get the different set fields references so we can later modify them
  const legexSet1Vol1 = document.getElementById("legexSet1Vol1");
  const legexSet1Vol2 = document.getElementById("legexSet1Vol2");
  const legexSet1Res1 = document.getElementById("legexSet1Res1");
  const legexSet1Res2 = document.getElementById("legexSet1Res2");

  // modify the set references according to the required math
  if (difficultyLegexSet1 === "easy") {
    legexSet1Vol1.innerHTML = 10;
    legexSet1Vol2.innerHTML = 15;
    legexSet1Res1.innerHTML = legexRef;
    legexSet1Res2.innerHTML = 2 * legexRef;
  }
  if (difficultyLegexSet1 === "hard") {
    legexSet1Vol1.innerHTML = 12;
    legexSet1Vol2.innerHTML = 16;
    legexSet1Res1.innerHTML = legexRef + 10;
    legexSet1Res2.innerHTML = 2 * legexRef + 10;
  }
  if (difficultyLegexSet1 === "brutal") {
    legexSet1Vol1.innerHTML = 13;
    legexSet1Vol2.innerHTML = 18;
    legexSet1Res1.innerHTML = legexRef + 20;
    legexSet1Res2.innerHTML = 2 * legexRef + 20;
  }
};

const legExSet2 = (legexRef) => {
  // parse the values of the difficulties
  const difficultyLegexSet2 = document.getElementById(
    "difficultyLegexSet2"
  ).value;

  // get the different set fields references so we can later modify them
  const legexSet2Vol1 = document.getElementById("legexSet2Vol1");
  const legexSet2Vol2 = document.getElementById("legexSet2Vol2");
  const legexSet2Res1 = document.getElementById("legexSet2Res1");
  const legexSet2Res2 = document.getElementById("legexSet2Res2");

  // modify the set references according to the required math
  if (difficultyLegexSet2 === "easy") {
    legexSet2Vol1.innerHTML = 10;
    legexSet2Vol2.innerHTML = 15;
    legexSet2Res1.innerHTML = legexRef;
    legexSet2Res2.innerHTML = 2 * legexRef;
  }
  if (difficultyLegexSet2 === "hard") {
    legexSet2Vol1.innerHTML = 12;
    legexSet2Vol2.innerHTML = 16;
    legexSet2Res1.innerHTML = legexRef + 10;
    legexSet2Res2.innerHTML = 2 * legexRef + 10;
  }
  if (difficultyLegexSet2 === "brutal") {
    legexSet2Vol1.innerHTML = 13;
    legexSet2Vol2.innerHTML = 18;
    legexSet2Res1.innerHTML = legexRef + 20;
    legexSet2Res2.innerHTML = 2 * legexRef + 20;
  }
};

const successCount = () => {
  const successBenchmark = 100;
  let collectedPoints = 0;
  // get the result reporting div reference
  const result = document.getElementById("result");
  // get all the success checkbox values
  const successLegpSet1 = document.getElementById("successLegpSet1").checked;
  const successLegpSet2 = document.getElementById("successLegpSet2").checked;
  const successLegexSet1 = document.getElementById("successLegexSet1").checked;
  const successLegexSet2 = document.getElementById("successLegexSet2").checked;

  // count all the successes, collect points
  if (successLegpSet1) {
    collectedPoints += 25;
  }
  if (successLegpSet2) {
    collectedPoints += 25;
  }
  if (successLegexSet1) {
    collectedPoints += 25;
  }
  if (successLegexSet2) {
    collectedPoints += 25;
  }

  // check if we reach the benchmark
  if (collectedPoints >= successBenchmark) {
    result.innerHTML = "SUCCESS";
  } else {
    result.innerHTML = "FAILURE";
  }
};

// React on changing reference values
document.getElementById("legpRef").addEventListener("input", calculate);
document.getElementById("legexRef").addEventListener("input", calculate);
document.getElementById("legcRef").addEventListener("input", calculate);
document.getElementById("squatRef").addEventListener("input", calculate);


// REACT on each difficulty change
document
  .getElementById("difficultyLegpSet1")
  .addEventListener("change", calculate);
document
  .getElementById("difficultyLegpSet2")
  .addEventListener("change", calculate);

document
  .getElementById("successLegpSet1")
  .addEventListener("change", successCount);
document
  .getElementById("successLegpSet2")
  .addEventListener("change", successCount);

document
  .getElementById("difficultyLegexSet1")
  .addEventListener("change", calculate);
document
  .getElementById("difficultyLegexSet2")
  .addEventListener("change", calculate);

document
  .getElementById("successLegexSet1")
  .addEventListener("change", successCount);
document
  .getElementById("successLegexSet2")
  .addEventListener("change", successCount);

// also run all on startup to make sure we get a rendered view with the initial values
calculate();
successCount();
