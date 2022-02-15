"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("Ready");
    squareify();
    flowerPower();
    tergetify();
    traceArt();
    targeted();
    springify();
    hurricane();
    illusion();
    boxAndCircle();
}

function squareify() {

    let selectedDocument = document.querySelector("#artwork1");

    for (let i = 100; i < 300; i += 20) {
        let divElement = document.createElement('div');
        divElement.classList.add("box");
        divElement.style.width = i+"px";
        divElement.style.height = i+"px";
        // console.log(divElement);
        selectedDocument.appendChild(divElement);
    }
}

function flowerPower() {
    
    let selectedDocument = document.querySelector("#artwork2");

    for (let i = 0; i < 90; i += 10) {
        let divElement = document.createElement('div');
        divElement.classList.add("box");
        divElement.style.transform = `rotate(${i}deg)`;
        selectedDocument.appendChild(divElement);
    }
}

function tergetify() {
    
    let selectedDocument = document.querySelector("#artwork3");

    for (let i = 0; i < 200; i += 10) {
        let divElement = document.createElement('div');
        divElement.classList.add("circle");
        divElement.style.width = i+"px";
        divElement.style.height = i+"px";
        selectedDocument.appendChild(divElement);
    }
}

function traceArt() {
    
    let selectedDocument = document.querySelector("#artwork4");

    for (let i = -90; i < 90; i += 20) {
        let divElement = document.createElement('div');
        divElement.classList.add("box");
        divElement.style.transform = `translateX(${i}px) translateY(${i}px)`;
        // divElement.style.transform = `translateY(${i}px)`;
        selectedDocument.appendChild(divElement);
    }
}

function targeted() {
    
    let selectedDocument = document.querySelector("#artwork5");

    for (let i = 1; i < 512; i *= 2) {
        let divElement = document.createElement('div');
        divElement.classList.add("circle");
        divElement.style.width = i+"px";
        divElement.style.height = i+"px";
        selectedDocument.appendChild(divElement);
    }
}

function springify() {
    
    let selectedDocument = document.querySelector("#artwork6");

    for (let i = -20; i < 45; i += 5) {
        let divElement = document.createElement('div');
        divElement.classList.add("circle");
        divElement.style.transform = `translateX(${i-50}px) rotate(${i*4}deg)`;
        selectedDocument.appendChild(divElement);
    }
}

function hurricane() {
    
    let selectedDocument = document.querySelector("#artwork7");

    for (let i = 0; i < 200; i += 10) {
        let divElement = document.createElement('div');
        divElement.classList.add("circle");
        divElement.style.width = i+"px";
        divElement.style.height = i+"px";
        divElement.style.transform = `translateX(${i}px) translateY(${-i/2}px)`;
        selectedDocument.appendChild(divElement);
    }
}

function illusion() {
    
    let selectedDocument = document.querySelector("#artwork8");

    for (let i = 50; i < 200; i += 10) {
        let divElement = document.createElement('div');
        divElement.classList.add("box");
        divElement.style.width = i+"px";
        divElement.style.height = i+"px";
        divElement.style.transform = `translateX(${i/2}px) rotate(${i}deg)`;
        selectedDocument.appendChild(divElement);
    }
}

function boxAndCircle() {
    
    let selectedDocument = document.querySelector("#artwork9");

    for (let i = 50; i < 200; i += 30) {
        let divBox = document.createElement('div');
        divBox.classList.add("box");
        divBox.style.width = i+"px";
        divBox.style.height = i+"px";
        selectedDocument.appendChild(divBox);

        let divCircle = document.createElement('div');
        divCircle.classList.add("circle");
        divCircle.style.width = i+"px";
        divCircle.style.height = i+"px";
        selectedDocument.appendChild(divCircle);
    }
}