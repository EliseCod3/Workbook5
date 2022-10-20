"use strict";

let imageFiles = [
    {path: "./images/Princess Bubblegum.jpg/300/200", name: "Princess Bubblegum",},
    {path: "./images/kirby chopsticks.jpg/300/200", name: "Kirby",},
    {path: "./images/Kakashi.jpg/300/200", name: "Kakashi",}
];

const characterList = document.getElementById("character-List");

function loadCharacterList() {
    imageFiles.forEach((imageFile) => {
        let option = new Option(imageFile.name, imageFile.path);
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
    console.log(imageFile.path);
}

window.onload = () => {
    loadCharacterList();

    const addBtn = document.getElementById("add-btn");
    addBtn.onclick = addNewImage;
}