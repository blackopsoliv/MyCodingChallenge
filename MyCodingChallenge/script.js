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

function order(jobs, depth) {
  // variable that we'll use to store ordered jobs
  var ordered = [];
  // variable that we'll use to store jobs that could not be ordered in this run
  var unordered = [];

  for (var i = 0; i < jobs.length; ++i) {
    var j = jobs[i];
    // if the jobs has 0 (empty) or 1 letter, just insert it as it is
    if (j.length < 2) {
      ordered.push(j);
      // if the job has 2 letters it means it has dependency that needs to be resolved
    } else if (j.length === 2) {
      // split the letters into [n]ame an [d]ependency
      var n = j[0];
      var d = j[1];
      // see if we have the dependency already on our ordered pile
      var p = ordered.indexOf(d);
      if (p >= 0) {
        // if we have, insert the new job AFTER their dependency
        ordered.splice(p + 1, 0, n);
      } else {
        // otherwise add it to unordered pile for a second run
        unordered.push(j);
      }
      // any other size of the job is not supported
    } else {
      // indicate failure
      ordered = [];
      break;
    }
  }

  if (depth > jobs.length) {
    // if depth is greater than jobs, it means that we can sort it
    // this can be caused by many unhappy paths like circular dependency etc
    // in this case indicate error
    ordered = [];
  } else if (unordered.length > 0) {
    // otherwise join the ordered and unordered array and run them though the
    // ordering funtion again, increase the 'depth' as well ensuring that we
    // check for NaN
    if (isNaN(depth)) {
      depth = 0;
    }
    ordered = order(ordered.concat(unordered), depth + 1);
  }

  return ordered;
}

// entry point of the program
main();
