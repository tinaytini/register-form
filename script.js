const firstPass = document.querySelector('input[name="firstPass"]');
const secondPass = document.querySelector('input[name="secondPass"]');
const form = document.querySelector('form[name="form"]');
const error = document.getElementById('error');

form.addEventListener('submit', validPass)

function validPass(e) {
    e.preventDefault();
    if (firstPass.value == secondPass.value && firstPass.value!="") {
        error.style.display = "none";
        window.location.href = 'index2.html'
        return true
    } 
    else {
        error.style.display = "block";
        return false
    }
}

