const ButtonClick = document.querySelector("#btn_cookie");
const CloseBlock = document.querySelector("#cookie_block");

ButtonClick.addEventListener ('click', function () {
    CloseBlock.style.display = 'none';
});

