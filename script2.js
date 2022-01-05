const form2 = document.getElementById('2-form');
const checkbox = document.getElementById('checkbox');
const error2 = document.getElementById('error-2');


form2.addEventListener('submit', submitForm);

function submitForm(n) {
    n.preventDefault();
    if(checkbox.checked === true) {
        error2.style.display = "none";
        window.location.href = 'index3.html';
        return true
    }
    else if (checkbox.checked === false) {
        error2.style.display = "block";
        return false
    }
}



