let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let title = document.getElementById("title");

window.addEventListener('scroll', function() {
    var scroll = window.scrollY;

    bg.style.top = scroll * 0.75 + 'px';
    moon.style.left = scroll * 0.5 + 'px';
    moon.style.top = scroll * 0.85 + 'px';
    mountain.style.top = -scroll * 0.35 + 'px';
    title.style.top = scroll + 'px';
})