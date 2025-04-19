function loadWithScript(url, target, callback) {
    const req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    document.getElementById(target).innerHTML = req.responseText;
    if (callback) callback();
  }
  
  loadWithScript("header.html", "1", function () {
    const script = document.createElement("script");
    script.src = "auth.js";
    document.body.appendChild(script);
  });
  