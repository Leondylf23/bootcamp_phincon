function showHidePass () {
    const passwordField = document.getElementById('password');
    const eye = document.getElementById('eye').children;

    if(passwordField.type === 'password') {
        passwordField.setAttribute("type", 'text');
        eye[0].setAttribute("class", "hidden");
        eye[1].setAttribute("class", "");
    } else {
        passwordField.setAttribute("type", 'password');
        eye[0].setAttribute("class", "");
        eye[1].setAttribute("class", "hidden");
    }
}