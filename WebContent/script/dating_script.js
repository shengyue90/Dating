function imagePrev() {
  var e = documents.getElementById("imagefile");
  if ('files' in e) {
    if (e.files.length > 0) {
      var prev = documents.getElementById("preview");
      prev.src = URL.createObjectURL(e.files[0]);
    }
  }
}

var submit= documents.getElementById("submit");
submit.onclick=imagePrev;