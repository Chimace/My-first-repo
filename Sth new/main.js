
document.getElementById('password').addEventListener('click', maximumChar)

function maximumChar(){
    let password = document.getElementById('password');
    if (password.value.length < 5){
        alert ('Password must be six characters long or more');
    }
}

