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

function push() {
  document.getElementById("displayUnsortedArray").innerHTML = "";
  var inputArrayAsString = document.getElementById("userInputArrayTextarea").value;
  console.log("Un-sorted Array : " + inputArrayAsString);
  var arrayToSort = inputArrayAsString.split(",");
  if (arrayToSort.length > 0) {
    createArrayTable(arrayToSort);
    div.style.visibility = 'visible';
    selectionSortImplementation(arrayToSort);
  }
  console.log("Sorted Array : " + arrayToSort);
}

function createArrayTable(arrayToSort) {
  var table = document.createElement("table");
  for (var i = 0; i < arrayToSort.length; i++) {
    var row = table.insertRow(-1);
    var firstNameCell = row.insertCell(-1);
    firstNameCell.appendChild(document.createTextNode(arrayToSort[i]));
  }
  table.setAttribute("border", "1");
  displayUnsortedArray.appendChild(document.createTextNode("Unsorted Array :"));
  displayUnsortedArray.appendChild(table);
}


function selectionSortImplementation(arr) {
  var loc, j, temp1;
  for (i = 0; i < arr.length; i++) {
    loc = i;
    for (j = i; j < arr.length; j++) {
      if (+arr[j] < +arr[loc]) {
        loc = j;
      }
    }
    temp1 = arr[loc];
    arr[loc] = arr[i];
    arr[i] = temp1;
  }
}
