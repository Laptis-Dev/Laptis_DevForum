var BackGround = [];
BackGround[0] = "img/1.jpg";
BackGround[1] = "img/2.jpg";
BackGround[2] = "img/3.jpg";
BackGround[3] = "img/4.jpg";

var BackGroundIndex = Math.round( Math.random() * 3 );
document.body.style.backgroundImage = "url(" + BackGround[BackGroundIndex] + ")";