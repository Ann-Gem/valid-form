const inputs = document.querySelectorAll('input');

const patterns = {
    name: /^[a-zA-Zaа-яА-Я]{3,10}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    // password: /^[\w@-\d]{8,20}$/,
    password: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
    phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,}\d$/,
    // phone: /(?:\+|\d)[\d\-\(\)]{7,}\d/g,
    // url: /^https?:\/\/[\w.\/?.&-=]+$/
    url: /^https?:\/\/([\w.]+)\/(\S*)/
}

function validate(field, regExp) {
    if(regExp.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})


