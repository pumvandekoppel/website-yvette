var i = 0;
if (sessionStorage["rememberPreviousSlide"]) {
    if (Number(sessionStorage["rememberPreviousSlide"]) != NaN) { 
        i = Number(sessionStorage["rememberPreviousSlide"])
        console.log("er was een sessionStorage key:")
        console.log(sessionStorage["rememberPreviousSlide"])
    }
}

var slides = document.getElementsByClassName("slide")

// first slide
if (i == 0) {
    slides[0].setAttribute("id", "first")
}
slides[(i % slides.length)].setAttribute("id", "first")
//

// first footer
var title = slides[i % slides.length].dataset.title
document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = title
var year = slides[i % slides.length].dataset.year
document.getElementsByTagName("footer")[0].getElementsByTagName("p")[2].innerHTML = year
//

// sold work 
if (slides[((i + 1) % slides.length)].dataset.sold == "true") {
    document.getElementById('y').style.backgroundColor =  "rgb(223, 9, 20)";
    document.getElementsByTagName("footer")[0].getElementsByTagName("button")[0].innerHTML = ''
}
else {
    document.getElementById('y').style.backgroundColor =  "rgb(161, 160, 160)";
    document.getElementsByTagName("footer")[0].getElementsByTagName("button")[0].innerHTML = '<h3><a href="about.html">y</a></h3>'
}


document.getElementById("first").style.display = "flex"


function next() {
    nextSlide()
    nextFooter()
    slides[(i % slides.length)].removeAttribute('id')
    i++
    var index = String(i)
    sessionStorage.setItem("rememberPreviousSlide", index)

    console.log("i = ")
    console.log(i)
    console.log("rememberPreviousSlide = ")
    console.log(sessionStorage["rememberPreviousSlide"])

}

function nextSlide() {
    // alert(JSON.stringify(slides))
    slides[(i % slides.length)].style.display = "none"
    slides[(i + 1) % slides.length].style.display = "flex"
    slides[(i + 1) % slides.length].setAttribute('id', 'first')
    }

function nextFooter() {
    var title = slides[(i + 1) % slides.length].dataset.title 
    document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = title
    var year = slides[(i + 1) % slides.length].dataset.year
    document.getElementsByTagName("footer")[0].getElementsByTagName("p")[2].innerHTML = year
}