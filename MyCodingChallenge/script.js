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

function runTest() {
  // order the test input
  var result = order(item.input);

  //  log the results (to the console for now)
  var log_msg = "Test case " + index + ": ";
  if (result.join() === item.expectedOutput.join()) {
    log_msg += "PASS";
  } else {
    log_msg += "FAIL";
  }
  log_msg +=
    " (" +
    item.input.join() +
    ") => (" +
    result.join() +
    ") =? (" +
    item.expectedOutput.join() +
    ")";
  console.log(log_msg);
}

function order(jobs, depth) {}
