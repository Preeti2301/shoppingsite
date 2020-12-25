var circ = document.querySelector("#circ");
window.addEventListener('mousemove', function(details) {
    circ.style.left = details.pageX + 'px';
    circ.style.top = details.pageY + 'px';

})

var slide1 = document.querySelector('#slide1');
var righticon = document.querySelector('#righticon');
righticon.addEventListener("click", function() {
    slide1.style.transform = "translateX(-100%)";
    slide2.style.transform = "translateX(-100%)";
})
var slide2 = document.querySelector('#slide2');
var lefticon = document.querySelector('#lefticon');
lefticon.addEventListener("click", function() {
    slide1.style.transform = "translateY(0%)";
    slide2.style.transform = "translateY(0%)";
})