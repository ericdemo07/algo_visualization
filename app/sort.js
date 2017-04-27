var k = 0;
var time = 2000;

function changeText(element, texts, time) {
  if (k == texts.length) {
    k = 0;
  }
  var text = texts[k++];
  if (text) {
    element.innerHTML = text;
    setTimeout(function() {
      changeText(element, texts, time);
    }, time);
  }
}

var element = document.getElementById("randomNpm");
var texts = [
  'Neural Prediction Model',
  'Nurturing Plutos Martians',
  'Native Papuan Masks',
  'Nutty Penguin Music'
];
changeText(element, texts, time);

var div = document.getElementById('displayUnsortedArray');
div.style.visibility = 'hidden';
var displayUnsortedArray = document.getElementById('displayUnsortedArray');

var arrayToSort;

function push() {
  document.getElementById("displayUnsortedArray").innerHTML = "";
  var inputArrayAsString = document.getElementById("userInputArrayTextarea").value;
  console.log("Un-sorted Array : " + inputArrayAsString);
  arrayToSort = inputArrayAsString.split(",");
  if (arrayToSort.length > 0) {
    createArrayTable(arrayToSort);
    div.style.visibility = 'visible';
    //  selectionSortImplementation(arrayToSort);
  }
}

function createArrayTable(arrayToSort) {
  var currentDiv = document.getElementById("displayArray");
  for (var i = 0; i < arrayToSort.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "_" + arrayToSort[i]);
    newDiv.setAttribute("class", "myAnimation3");
    var newContent = document.createTextNode(arrayToSort[i]);
    newDiv.appendChild(newContent);
    document.body.insertBefore(newDiv, currentDiv);
  }
}

function start() {
  selectionSortImplementation(arrayToSort);
  console.log("Sorted Array : " + arrayToSort);
}

function flashElementGrey() {
  //  document.getElementById("myAnimation1").style.background = "green";
  console.log("test111111.. . ");
  // setTimeout(function() {
  //   document.getElementById("myAnimation1").style.background = "white";
  // }, 1000);
}

var k1 = 0;

function frame1(i, callback) {
  var elem = document.getElementById("_" + i);
  var pos = 0;
  var id = setInterval(function() {
    if (pos == 350) {
      clearInterval(id);
      console.log("hell");
      callback();
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }, 5);
}

function wrap(i) {
  console.log(i);
}

function test1(aryElem, callback) {
  var elem = document.getElementById("_" + aryElem);
  console.log("t1 : " + i + "   elem : " + elem);
  var pos = 0;
  test2(elem, pos,
    function() {
      console.log("s2 : " + i);
    }
  );
  callback();
}

function test2(elem, pos, callback) {
  var id = setInterval(
    function() {
      if (pos == 350) {
        clearInterval(id);
        console.log("hell");
        callback();
      } else {
        pos++;
        elem.style.left = pos + 'px';
      }
    }, 5);
  console.log("t2 : " + i);
  test3(i,
    function() {
      console.log("s3 : " + i);
    }
  );
}

function test3(i, callback) {
  console.log("t3 : " + i);
  callback();
}

function selectionSortImplementation(arr) {
  var loc, j, temp1;
  for (i = 0; i < arr.length; i++) {
    loc = i;
    test1(arr[i],
      function() {
        console.log("s1 : " + i);
      });
    // wrap(function()
    // {
    //   console.log(i);
    //   loc = i;
    //   for (j = i; j < arr.length; j++) {
    //     if (+arr[j] < +arr[loc]) {
    //       loc = j;
    //     }
    //   }
    //   temp1 = arr[loc];
    //   arr[loc] = arr[i];
    //   arr[i] = temp1;
    // });
  }
}


function myMove1(a, callback) {
  var elem = document.getElementById("_" + a);
  console.log(elem + "    " + "_" + a);
  var pos = 0;
  var id = setInterval(function() {
    frame();
  }, 5);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
      console.log("hell");
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
  callback();
}

function myMove2(callback) {
  var elem = document.getElementById("myAnimation2");
  var pos = 0;
  var id = setInterval(function() {
    frame();
  }, 5);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
      callback(flashElementGrey);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}

function myMove3(callback) {
  var elem = document.getElementById("myAnimation3");
  var pos = 0;
  var id = setInterval(function() {
    frame();
  }, 5);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
      callback();
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
