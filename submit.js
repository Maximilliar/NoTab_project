const submitButton = document.querySelector('#send');
const form = document.querySelectorAll('.form_input, .form_input50');

submitButton.addEventListener('click', function () {
    form.forEach((val) => {
        if (val.value) {
            console.log(val.value);
            if (val.classList.contains('red-border')) {
                val.classList.remove('red-border');
                
            }
        } else {
            val.classList.add('red-border');
        }
        val.value = "";
    });
});

