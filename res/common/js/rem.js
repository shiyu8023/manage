;~function() {
  var onresize = function() {
    var width = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth;
    var size = width / 320* 50;
    if (size > 100) size = 100;
    document.documentElement.style.fontSize = size + "px";
  };
  window.addEventListener("resize", onresize);
  onresize();
}();
