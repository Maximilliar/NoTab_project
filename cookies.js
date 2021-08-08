const ButtonClick = document.querySelector("#btn_cookie");
const CloseBlock = document.querySelector("#cookie_block");

ButtonClick.addEventListener('click', function () {
    CloseBlock.style.display = 'none';
    localStorage.setItem('cookie', true);
});

if (localStorage.getItem('cookie')) {
    CloseBlock.remove();
}