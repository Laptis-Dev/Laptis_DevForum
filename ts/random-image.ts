var BackGround: string[] = [];

BackGround[0] = "img/1.jpg";
BackGround[1] = "img/2.jpg";
BackGround[2] = "img/3.jpg";
BackGround[3] = "img/4.jpg";

const BackGroundIndex = Math.floor(Math.random() * BackGround.length);
const SelectedImagePath = BackGround[BackGroundIndex];

const fileName = (SelectedImagePath ?? "").split("/").pop();
const className = "bg" + (fileName?.split(".")[0] ?? "default");

const bgElement = document.querySelector(".background");
if (bgElement) {
    bgElement.classList.add(className);
}