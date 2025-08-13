var signUpButton = document.getElementById('register') as HTMLElement;
var signinButton = document.getElementById('login') as HTMLElement;
var container = document.getElementById('container') as HTMLElement;

signinButton.addEventListener('click', () => {
    (container as HTMLElement).classList.remove(`left-panel-active`);
    (container as HTMLElement).classList.add('right-panel-active');
});

signUpButton.addEventListener('click', () => {
    (container as HTMLElement).classList.remove(`right-panel-active`);
    (container as HTMLElement).classList.add(`left-panel-active`);
});
