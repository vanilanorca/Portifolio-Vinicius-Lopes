const load = () => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inherit";
}

window.onload = (function () {
    window.setInterval('load()',2000);})