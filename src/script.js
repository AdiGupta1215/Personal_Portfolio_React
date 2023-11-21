let elements = document.body.getElementsByTagName("*");
let togglecheck = true;

let darkmode = document.getElementById("darkmode");
darkmode.addEventListener("click", toggleDark);

function toggleDark() {
    console.log("hello");
    Array.from(elements).forEach(x => x.classList.toggle('dark-mode'));

    let computedStyle = window.getComputedStyle(document.body);
    let backgroundColor = computedStyle.backgroundColor;

    console.log(backgroundColor);
    if (backgroundColor === "rgb(255, 255, 255)") {
        document.body.style.backgroundColor = "#272727";
    } else if (backgroundColor === "rgb(39, 39, 39)") {
        document.body.style.backgroundColor = "#fff";
    }
    toggleImages();
}


function toggleImages() {
    let darkmode = document.getElementById("darkmode");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    if (togglecheck) {
        darkmode.src = "Images/sunicon_white.png"
        phone.src = "Images/phoneicon_white.png"
        email.src = "Images/whiteemailclipart.png"
        togglecheck = false;
        console.log("running")
    } else {
        darkmode.src = "Images/sunicon.png";
        phone.src = "Images/PhoneIcon.png"
        email.src = "Images/emailclipart.webp"
        togglecheck = true;
    }
}