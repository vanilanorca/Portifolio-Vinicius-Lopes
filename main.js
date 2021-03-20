
function load (){
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inherit";
}

window.onload = (function () {
    window.setInterval('load()',2000);})

function browserVerify() {

    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
           //alert('Opera');
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        //alert('Chrome');
        //gconsole.log(window.navigator.userAgent)
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        //alert('Firefox');
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        //alert('Explorer');
        //console.log(window.navigator.userAgent)
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        document.getElementById("main-site").style.display = 'none';
        document.getElementById("not-suported").style.display = 'block';
    }
    else {
          alert('unknown');
    }
}