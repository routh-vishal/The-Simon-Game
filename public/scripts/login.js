$(document).ready(function () {
    const switchToRegister = $('#showRegister'); 
    const switchToLogin = $('#showLogin'); 
    $('.register-container').hide();

    switchToRegister.click(function (e) {
        e.preventDefault();
        $('.login-container').hide();
        $('.register-container').show();
    });

    switchToLogin.click(function (e) {
        e.preventDefault();
        $('.register-container').hide();
        $('.login-container').show();
    });
})