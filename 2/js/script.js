(function(){
    document.addEventListener('DOMContentLoaded', _ => {
        const form = document.querySelector('.form'),
              сontainer = document.querySelector('.container'),
              inputs = form.querySelectorAll('input');
        inputs.forEach(field => {
            field.addEventListener('keypress', event => {
                let regExp = /[а-яА-Я\s-]/;
                event.key.match(regExp) ? null : event.preventDefault()
            })
            field.addEventListener('blur', event => {
                let correctedValue = field.value.trim();
                while(correctedValue.indexOf('-') === 0) {
                    correctedValue = correctedValue.slice(1)
                }
                while (correctedValue.substring(correctedValue.length-1) === '-') {
                    correctedValue = correctedValue.slice(0, -1);
                }
                correctedValue = correctedValue.replace(/-+/g, '-');
                correctedValue = correctedValue.replace(/\s+/g, ' ');
                correctedValue = correctedValue.substring(0, 1).toUpperCase() + correctedValue.substring(1, correctedValue.length).toLowerCase();
                field.value = correctedValue;
            })
        })
        form.addEventListener('submit', element => {
            element.preventDefault();
            let surname = form.querySelector('input[name="surname"]').value,
                name = form.querySelector('input[name="name"]').value,
                patronymic = form.querySelector('input[name="patronymic"]').value,
                fio = document.createElement('p');
            fio.textContent = `${surname} ${name} ${patronymic}`;
            сontainer.append(fio);
            document.querySelectorAll('.form input').forEach(field => {
                field.value = '';
            })
        })
    })
})();
