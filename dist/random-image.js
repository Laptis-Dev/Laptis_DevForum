"use strict";
var _a;
var BackGround = [];
BackGround[0] = "img/1.jpg";
BackGround[1] = "img/2.jpg";
BackGround[2] = "img/3.jpg";
BackGround[3] = "img/4.jpg";
const BackGroundIndex = Math.floor(Math.random() * BackGround.length);
const SelectedImagePath = BackGround[BackGroundIndex];
const fileName = (SelectedImagePath !== null && SelectedImagePath !== void 0 ? SelectedImagePath : "").split("/").pop();
const className = "bg" + ((_a = fileName === null || fileName === void 0 ? void 0 : fileName.split(".")[0]) !== null && _a !== void 0 ? _a : "default");
const bgElement = document.querySelector(".background");
if (bgElement) {
    bgElement.classList.add(className);
}
