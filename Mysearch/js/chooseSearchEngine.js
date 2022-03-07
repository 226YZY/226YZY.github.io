var searchEngine = document.getElementsByClassName("searchEngine");
var forms = document.getElementsByTagName("form");
var length = searchEngine.length;
searchEngine[0].onclick = function () {
    for (var i = 1; i < length; i++) {
        searchEngine[i].style.display =
            "block";
    }
}

var n = 0; //第一个显示表单的位置
for (var i = 1; i < length; i++) {
    searchEngine[i].onclick = function (a) {
        return function () {
            //交换显示的html内容
            var temp = searchEngine[0].innerHTML;
            searchEngine[0].innerHTML = this.innerHTML;
            this.innerHTML = temp;
            for (var j = 1; j < length; j++) {
                searchEngine[j].style.display =
                    "none";
            }
            hidden_from(); //隐藏表单
            if (searchEngine[0].innerHTML=='百度') {
                document.getElementById('from_baidu').style.display = 'block';
            } 
            else if (searchEngine[0].innerHTML=='必应') {
                document.getElementById('from_bing').style.display = 'block';
            }
            else if (searchEngine[0].innerHTML=='谷歌') {
                document.getElementById('from_google').style.display = 'block';
            } 
            else if (searchEngine[0].innerHTML=='搜狗') {
                document.getElementById('from_sougou').style.display = 'block';
            }
            else if (searchEngine[0].innerHTML=='360') {
                document.getElementById('from_360').style.display = 'block';
            }
        }
    }(i);
    searchEngine[i].onmouseover = function () {
        this.style.border =
            "#0bc5f3 1px solid";
        this.style.background =
            "#a3a3a3a6";
    }
    searchEngine[i].onmouseout =
        function () {
            this.style.border = "0px";
            this.style.background ="#f0f8ff"
        }
}

//隐藏搜索框
function hidden_from() {
    for (var j = 0; j < forms.length; j++) {
        forms[j].style.display = "none";
    }
}