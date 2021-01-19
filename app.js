
let full= document.getElementById("full");
let half= document.getElementById("half");
let quarter=document.getElementById("quarter");
let status=document.getElementById("status");
let upload=document.getElementById("upload");
let unload= document.getElementById("unload")


function plus3() {
    full.style.backgroundColor = "green"
    half.style.backgroundColor = "green";
    quarter.style.backgroundColor = "green";
    status.innerHTML = "99%";
}
function plus2() {
    full.style.backgroundColor = "white"
    half.style.backgroundColor = "orange";
    quarter.style.backgroundColor = "orange";
    status.innerHTML = "66%";
}
function plus1() {
    full.style.backgroundColor = "white"
    half.style.backgroundColor = "white";
    quarter.style.backgroundColor = "red";
    status.innerHTML = "33%";
}
function plus0() {
    full.style.backgroundColor = "white"
    half.style.backgroundColor = "white";
    quarter.style.backgroundColor = "white";
    status.innerHTML = "0%";
}

upload.addEventListener("click",resultP);
unload.addEventListener("click",resultM);

//doldurmak icin
function resultP() {
    if (status.textContent == "%0") {
        plus0();
    } else if (status.textContent == "%33") {
        plus1();
    } else if (status.textContent == "%66") {
        plus2();
    }
}
//bosaltmak icin
function resultM() {
    if (status.textContent == "%99") {
        plus3();
    } else if (status.textContent == "%66") {
        plus2();
    } else if (callIdStatus.textContent == "%33") {
        plus1();
    }
}

