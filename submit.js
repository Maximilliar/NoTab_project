const submitButton = document.querySelector('#send');
const forms = document.querySelectorAll('.form_input, .form_input50');
const divApps = document.querySelector('.download_apps_ios_android');

const formName = document.getElementsByName('firstName')[0],
    formVenueName = document.getElementsByName('venueName')[0],
    formEmail = document.getElementsByName('email')[0],
    formSubject = document.getElementsByName('subject')[0],
    formVenueCity = document.getElementsByName('venueCity')[0],
    formStateCity = document.getElementsByName('stateCity')[0],
    formMessage = document.getElementsByName('message')[0];

submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    forms.forEach((item) => {
        if (item.value == '') {
            item.classList.add('red-border');
            submitButton.disabled = true;
            setTimeout(() => submitButton.disabled = false, 5000);
        }
        if (item.value) {
            if (item.classList.contains('red-border')) {
                item.classList.remove('red-border');
            }
        }
    });

    checkRedBorder();
});

function checkRedBorder() {
    if ((formName || formVenueName || formEmail || formSubject || formMessage || formVenueCity || formStateCity).classList.contains('red-border')) {
        showMessage('Произошла ошибка! Заполните все поля ввода.');
    } else {
        formName.value = '';
        formVenueName.value = '';
        formEmail.value = '';
        formSubject.value = '';
        formMessage.value = '';
        formStateCity.value = '';
        formVenueCity.value = '';
        showMessage('Спасибо за обращение! Мы с вами свяжемся :)');
    }
}

function showMessage(message) {
    const messageBlock = document.createElement('div');
    messageBlock.innerHTML = `
            <h1>${message}</h1>
            `;
    messageBlock.style.cssText = `
            text-align: center;
            margin-top: -82px;
            `;
    divApps.prepend(messageBlock);
    setTimeout(() => messageBlock.remove(), 5000);
}