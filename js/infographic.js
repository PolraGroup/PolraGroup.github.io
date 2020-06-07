var modal = document.getElementById("myModalinfo");
var img = document.getElementById("infographic");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("closing")[0];
span.onclick = function () {
    modal.style.display = "none";
} 