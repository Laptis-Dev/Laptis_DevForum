var signUpButton = document.getElementById('register');
var signinButton = document.getElementById('login');
var container = document.getElementById('container');

(signinButton as HTMLElement).addEventListener('click', function () {
    (container as HTMLElement).classList.remove(`left-panel-active`);
    (container as HTMLElement).classList.add('right-panel-active');
});

(signUpButton as HTMLElement).addEventListener('click', function () {
    (container as HTMLElement).classList.remove(`right-panel-active`);
    (container as HTMLElement).classList.add(`left-panel-active`);
});
