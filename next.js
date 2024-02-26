var i = 0;
if (sessionStorage["rememberPreviousSlide"]) {
    if (Number(sessionStorage["rememberPreviousSlide"]) != NaN) { 
        i = Number(sessionStorage["rememberPreviousSlide"])
        console.log("er was een sessionStorage key:")
        console.log(sessionStorage["rememberPreviousSlide"])
    }
}

if (document.getElementsByTagName('main')[0].getElementsByTagName('div')[0].classList.contains('slide')) {

    var slides = document.getElementsByClassName("slide")
    
    // first slide
    if (i == 0) {
        slides[0].setAttribute('id', "first")

    }
    else if (i!== 0) {
        slides[(i % slides.length)].setAttribute('id', "first")
    }
    //

    // first footer
    var title = slides[i % slides.length].dataset.title
    document.getElementsByTagName('footer')[0].getElementsByTagName('span')[0].innerHTML = title
    var year = slides[i % slides.length].dataset.year
    document.getElementsByTagName('footer')[0].getElementsByTagName('span')[1].innerHTML = year
    var dimensions = slides[i % slides.length].dataset.dimensions
    document.getElementsByTagName('footer')[0].getElementsByTagName('span')[2].innerHTML = dimensions
    //

    document.getElementById("first").style.display = 'flex'
}

    function next() {
        document.getElementById("first").removeAttribute('id')
        nextSlide()
        nextFooter()
        nextSold()
        i++
        // var index = String(i)
        // sessionStorage.setItem("rememberPreviousSlide", index)

        // console.log("i = ")
        // console.log(i)
        // console.log("rememberPreviousSlide = ")
        // console.log(sessionStorage["rememberPreviousSlide"])

    }

    function nextSlide() {
        // alert(JSON.stringify(slides))
        slides[(i % slides.length)].style.display = 'none'
        slides[(i + 1) % slides.length].style.display = 'flex'
        slides[(i + 1) % slides.length].setAttribute('id', "first")
    }

    function nextFooter() {
        // update title
        var title = slides[(i + 1) % slides.length].dataset.title 
        document.getElementsByTagName('footer')[0].getElementsByTagName('span')[0].innerHTML = title
        // update year
        var year = slides[(i + 1) % slides.length].dataset.year
        document.getElementsByTagName('footer')[0].getElementsByTagName('span')[1].innerHTML = year
        // update dimensions
        var dimensions = slides[(i + 1) % slides.length].dataset.dimensions
        document.getElementsByTagName('footer')[0].getElementsByTagName('span')[2].innerHTML = dimensions
    }

    function nextSold() {
        // sold work ?
        if (slides[(i + 1) % slides.length].dataset.sold == 'true') {
            document.getElementsByTagName('button')[0].style.backgroundColor =  'hsl(3, 77%, 48%)'
            document.getElementsByTagName('header')[0].getElementsByTagName('a')[0].getElementsByTagName('h3')[0].style.color =  'hsl(3, 77%, 48%)'
        }
        // not sold
        else if (slides[(i + 1) % slides.length].dataset.sold !== 'true') {
            document.getElementsByTagName('button')[0].style.backgroundColor =  'hsl(0, 1%, 63%)';
            document.getElementsByTagName('header')[0].getElementsByTagName('a')[0].getElementsByTagName('h3')[0].style.color =  'hsl(210, 16%, 38%)';
        }
    }

    function previous() {
        if (i==0) {
            i = slides.length
        }
        document.getElementById("first").removeAttribute('id')
        previousSlide()
        previousFooter()
        previousSold()
        i--
    } 

    function previousSlide() {
        // alert(JSON.stringify(slides))
        slides[(i % slides.length)].style.display = 'none'
        slides[(i - 1) % slides.length].style.display = 'flex'
        slides[(i - 1) % slides.length].setAttribute('id', "first")
    }

    function previousFooter() {
        // update title
        var title = slides[(i - 1) % slides.length].dataset.title 
        document.getElementsByTagName('footer')[0].getElementsByTagName('span')[0].innerHTML = title
        // update year
        var year = slides[(i - 1) % slides.length].dataset.year
        document.getElementsByTagName('footer')[0].getElementsByTagName('span')[1].innerHTML = year
        // update dimensions
        var dimensions = slides[(i - 1) % slides.length].dataset.dimensions
        document.getElementsByTagName('footer')[0].getElementsByTagName('span')[2].innerHTML = dimensions
    }

    function previousSold() {
        // sold work ?
        if (slides[(i - 1) % slides.length].dataset.sold == 'true') {
            document.getElementsByTagName('button')[0].style.backgroundColor =  'hsl(3, 77%, 48%)'
            document.getElementsByTagName('header')[0].getElementsByTagName('a')[0].getElementsByTagName('h3')[0].style.color =  'hsl(3, 77%, 48%)'
        }
        // not sold
        else if (slides[(i - 1) % slides.length].dataset.sold !== 'true') {
            document.getElementsByTagName('button')[0].style.backgroundColor =  'hsl(0, 1%, 63%)';
            document.getElementsByTagName('header')[0].getElementsByTagName('a')[0].getElementsByTagName('h3')[0].style.color =  'hsl(210, 16%, 38%)';
        }
    }
