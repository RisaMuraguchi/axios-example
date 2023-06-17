function taskA() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("A");
      resolve();
    }, 1000);
  });
}
function taskB() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("B");
      resolve();
    }, 1000);
  });
}
function taskC() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("C");
      resolve();
    }, 1000);
  });
}
function taskD() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("D");
      resolve();
    }, 1000);
  });
}

// それぞれの処理をthenで繋げる
taskA().then(taskB).then(taskC).then(taskD);