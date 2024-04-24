window.addEventListener("load", function() {
    console.log("Working");
});

window.addEventListener("scroll", function() {
    var scrollAmount = (window.scrollY / (document.body.scrollHeight - this.window.innerHeight)) * 100;
    document.getElementById("scroll-bar").style.width = scrollAmount + "%";
    scrollAmount = ((window.scrollY / (document.body.scrollHeight - this.window.innerHeight)) * 100) - ((28 / this.window.innerHeight) * 100);
    document.getElementById("mario").style.left = scrollAmount + "%";
    if (((Math.round(scrollAmount)) % 2) == 0) {
        if (document.getElementById("mario").title == "1") {
            document.getElementById("mario").src = "images/mario2.png";
            document.getElementById("mario").title = "2";
        }
        else {
            document.getElementById("mario").src = "images/mario1.png";
            document.getElementById("mario").title = "1";
        }
    }
    // console.log(document.getElementById("mario").width);
    // console.log(window.pageYOffset);
    // console.log(window.scrollY);
    // console.log(document.body.scrollHeight - this.window.innerHeight);
});

window.addEventListener("scroll", function() {
    if (window.scrollY <= 30) {
        document.getElementsByClassName("nav-style")[0].style.background = "";
    }
    else {
        document.getElementsByClassName("nav-style")[0].style.background = "#121212c5";
    }

});

document.getElementsByClassName("join-button")[0].addEventListener("click", function() {
    location.href = "sv.html"
});

document.getElementsByClassName("homepage-image")[0].addEventListener("mouseover", function() {
    document.getElementsByClassName("homepage-image")[0].style.transition = "transform .2s";
    document.getElementsByClassName("homepage-image")[0].style.transform = "scale(1.1)";
});

document.getElementsByClassName("homepage-image")[0].addEventListener("mouseleave", function() {
    document.getElementsByClassName("homepage-image")[0].style.transition = "transform .2s";
    document.getElementsByClassName("homepage-image")[0].style.transform = "scale(1)";
});

document.getElementsByClassName("contact")[0].addEventListener("mouseover", function() {
    document.getElementsByClassName("contact")[0].style.background = "#737373";
});

document.getElementsByClassName("contact")[0].addEventListener("mouseleave", function() {
    document.getElementsByClassName("contact")[0].style.background = "#91919163";
});