function decimal() {
  document.getElementById("numSysInput").placeholder = "Decimal";
}
function binary() {
  document.getElementById("numSysInput").placeholder = "Binary";
}
function octal() {
  document.getElementById("numSysInput").placeholder = "Octal";
}
function hexa() {
  document.getElementById("numSysInput").placeholder = "Hexadecimal";
}
function numSysSubmit() {
  var val = document.getElementById('numSysInput').value;
  var intVal = parseInt(val);
  if (document.getElementById('numSysInput').placeholder == "Decimal") {
      document.getElementById('numSysDecimal').innerHTML = "Decimal Value: " + val;
      document.getElementById('numSysBinary').innerHTML = "Binary Value: " + intVal.toString(2);
      document.getElementById('numSysOctal').innerHTML = "Octal Value: " + intVal.toString(8);
      document.getElementById('numSysHex').innerHTML = "Hex Value: " + intVal.toString(16);
  }
  else if (document.getElementById('numSysInput').placeholder == "Binary") {
      document.getElementById('numSysDecimal').innerHTML = "Decimal Value: " + parseInt(val, 2);
      document.getElementById('numSysBinary').innerHTML = "Binary Value: " + val;
      document.getElementById('numSysOctal').innerHTML = "Octal Value: " + parseInt(val, 2).toString(8);
      document.getElementById('numSysHex').innerHTML = "Hex Value: " + parseInt(val, 2).toString(16);
  }
  else if (document.getElementById('numSysInput').placeholder == "Octal") {
      document.getElementById('numSysDecimal').innerHTML = "Decimal Value: " + parseInt(val, 8);
      document.getElementById('numSysBinary').innerHTML = "Binary Value: " + parseInt(val, 8).toString(2);
      document.getElementById('numSysOctal').innerHTML = "Octal Value: " + val;
      document.getElementById('numSysHex').innerHTML = "Hex Value: " + parseInt(val, 8).toString(16);
  }
  else if (document.getElementById('numSysInput').placeholder == "Hexadecimal") {
      document.getElementById('numSysDecimal').innerHTML = "Decimal Value: " + parseInt(val, 16);
      document.getElementById('numSysBinary').innerHTML = "Binary Value: " + parseInt(val, 16).toString(2);
      document.getElementById('numSysOctal').innerHTML = "Octal Value: " + parseInt(val, 16).toString(8);
      document.getElementById('numSysHex').innerHTML = "Hex Value: " + val;
  }

}


function alphabetize() {
  var inp = document.getElementById("alphabetizerInp").value;
  var inpSplit = inp.split(" ");

  inpSplit.sort();

  document.getElementById("alphabetizerInp").value = inpSplit;
}
function wordCount() {
  var inp = document.getElementById("wordCounterInp").value;
  var inpSplit = inp.split(" ");

  document.getElementById("wordCounterInp").value = inpSplit.length;
}
