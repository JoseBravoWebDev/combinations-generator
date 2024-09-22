// const numbersToCombinate = [1, 2, 3, 4, 5];
const numbersToCombinate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69];

let combinationsMade = [];
let currentCombination = [];

const generateCombination = document.getElementById('generateCombination');
const resultContainer = document.getElementById('resultContainer');

async function* generateAllCombinations(arr, length) {
  yield* generateCombinations(arr, length);
}

async function* generateCombinations(arr, length) {
  if (length === 0) {
    yield [...currentCombination];
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!currentCombination.includes(arr[i])) {
      currentCombination.push(arr[i]);
      yield* generateCombinations(arr, length - 1);
      currentCombination.pop();
    }
  }
}

function updateTotalResults() {
  const totalResultsElement = document.querySelector('.numberOfResults');
  totalResultsElement.innerText = `${combinationsMade.length} Combinaciones fueron generadas`;
}

async function letsCombinate() {
  for await (const combination of generateAllCombinations(numbersToCombinate, 5)) {
    combinationsMade.push(combination);
    console.clear();
    console.log(combinationsMade);
  }
  console.clear();
  console.log(combinationsMade);
}

generateCombination.addEventListener("click", letsCombinate);
