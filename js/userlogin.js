var signUpButton = document.getElementById('register');
var signinButton = document.getElementById('login');
var container = document.getElementById('container');

signinButton.addEventListener('click', function () {
    container.classList.remove(`left-panel-active`);
    container.classList.add('right-panel-active');
});

signUpButton.addEventListener('click', function () {
    container.classList.remove(`right-panel-active`);
    container.classList.add(`left-panel-active`);
});
