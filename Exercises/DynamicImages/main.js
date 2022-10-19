"use strict";

let imageFiles = [
    {path: "./images/Princess Bubblegum.jpg/300/200", name: "Princess Bubblegum",},
    {path: "./images/kirby chopsticks.jpg/300/200", name: "Kirby",},
    {path: "./images/Kakashi.jpg/300/200", name: "Kakashi",}
];

const imgList = document.getElementById("img-List");

function loadCharacterList() {
    imageFiles.forEach((imageFile) => {
        let option = new Option(imageFile.name, imageFile.path);
        imgList.appendChild(option);
    })
}

window.onload = () => {
    loadCharacterList();
}