function main() {}

function prepareTestCases() {
  var test_cases = [];
  // happy-path cases
  test_cases.push({
    input: [""],
    expectedOutput: [""]
  });
  test_cases.push({
    input: ["a"],
    expectedOutput: ["a"]
  });
  test_cases.push({
    input: ["a", "b", "c"],
    expectedOutput: ["a", "b", "c"]
  });
  test_cases.push({
    input: ["a", "bc", "c"],
    expectedOutput: ["a", "c", "b"]
  });
  test_cases.push({
    input: ["a", "bc", "cf", "da", "eb", "f"],
    expectedOutput: ["a", "d", "f", "c", "b", "e"]
  });
  test_cases.push({
    input: ["ac", "bc", "c"],
    expectedOutput: ["c", "b", "a"]
  });
  // error cases
  test_cases.push({
    input: ["a", "b", "cc"],
    expectedOutput: []
  });
  test_cases.push({
    input: ["a", "bc", "cf", "da", "e", "fb"],
    expectedOutput: []
  });
  return test_cases;
}

function runTest() {}
