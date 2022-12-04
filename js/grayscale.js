if (mourning()) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
}

function mourning() {
    var Days = new Array("0512", "1213");
    var currentdate = new Date();
    var str = "";
    var mm = currentdate.getMonth() + 1;
    if (currentdate.getMonth() > 9) {
        str += mm;
    } else {
        str += "0" + mm;
    }
    if (currentdate.getDate() > 9) {
        str += currentdate.getDate();
    } else {
        str += "0" + currentdate.getDate();
    }
    if (Days.indexOf(str) > -1) {
        return 1;
    } else {
        return 0;
    }
}