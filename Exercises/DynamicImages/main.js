"use strict";

let imageFiles = [
    {path: "./images/Princess Bubblegum.jpg", name: "Princess Bubblegum",},
    {path: "./images/kirby chopsticks.jpg", name: "Kirby",},
    {path: "./images/Kakashi.jpg", name: "Kakashi",}
];

const characterList = document.getElementById("character-List");
const imageDiv = document.querySelector("#imagesDiv");

function loadCharacterList() {
    imageFiles.forEach((imageFile) => {
        let option = new Option(imageFile.name, imageFile.name);
        characterList.appendChild(option);
    });
}

function addNewImage() {
    const selectedValue = characterList.value;

    // const imagePath = null;
    // imageFiles.forEach((imageFile) => {
    //     if (imageFile.name === selectedValue) {
    //         imagePath = imageFile.path;
    //         return;
    //     }
    // });
    let imageFile = imageFiles.find((f) => f.name === selectedValue);
    let img = document.createElement("img");
    img.src = imageFile.path;
    img.alt = imageFile.name;

    imageDiv.appendChild(img);
}

function clearImages() {
    imageDiv.innerHTML = " "
}

window.onload = () => {
    loadCharacterList();

    const addBtn = document.getElementById("add-btn");
    addBtn.onclick = addNewImage;

    const clearBtn = document.getElementById("clear-btn");
    clearBtn.onclick = clearImages;
};