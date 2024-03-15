
function getNumber() {
  var numSharp = window.location.hash;
  if (numSharp != null) {
      numSharp = numSharp.substring(1,numSharp.length);
      var field = document.getElementById('NumberShow');
      field.value = numSharp;
  }
}

function inputNumber(i) {
  var field = document.getElementById('NumberShow');
  var au = document.getElementById('keyAudio');
  field.value = field.value + i;
  switch (i) {
    case '*':
      au.src = "audio/s.wav";
      au.play();
      break;
    case '#':
      au.src = "audio/p.wav";
      au.play();
      break;
    default:
      au.src = "audio/" + i + ".wav";
      au.play();
      break;
  }
}

function btnDelete() {
  var field = document.getElementById('NumberShow');
  var strNum = field.value;
  strNum = strNum.substring(0,strNum.length - 1);
  field.value = strNum;
}

function btnCall() {
  var field = document.getElementById('NumberShow');
  var openFrame = document.getElementById('callURLOpenFrame');
  var strNum = field.value;
  var telURI = "tel://" + strNum;
  openFrame.src = telURI;
}

function btnShare() {
  var qrcode = new QRCode(document.getElementById("qrcode"), {
	   width : 200,
	   height : 200
  });
  var field = document.getElementById('NumberShow');
  var strNum = field.value;
  var telURI = "tel://" + strNum;
  if (telURI === "tel://") {}
  else {
    qrcode.makeCode(telURI);
    document.getElementById('blur').style = 'display: auto;';
    document.getElementById('shareQR').style = 'display: auto;';
  }
}
