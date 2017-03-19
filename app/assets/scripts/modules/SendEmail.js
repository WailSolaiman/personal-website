import $ from 'jquery';

class SendEmail {
    constructor() {
        this.sendEmail();
    }

    sendEmail() {
        $('#contact-form').submit(function (e) {
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var subject = document.getElementById('subject');
            var text = document.getElementById('textarea');

            if (!name.value || !email.value || !subject.value || !text.value) {
                if (!name.value) {
                    $('#name').addClass('animated shake');
                    alertify.error('Bitte überprüfen Sie Ihrer Name.');
                } else if (!email.value) {
                    $('#email').addClass('animated shake');
                    alertify.error('Bitte überprüfen Sie Ihre E-Mail.');
                } else if (!subject.value) {
                    $('#subject').addClass('animated shake');
                    alertify.error('Bitte geben Sie einen Titel ein.');
                } else if (!text.value) {
                    $('#textarea').addClass('animated shake');
                    alertify.error('Bitte geben Sie einen Text ein.');
                }
                $('input').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $('input').removeClass('animated shake');
                });
                $('textarea').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $('textarea').removeClass('animated shake');
                });
                return false;
            } else {
                $.ajax({
                    url: "https://formspree.io/wailsolaiman@hotmail.com",
                    method: "POST",
                    data: $(this).serialize(),
                    dataType: "json"
                });
                $(this).get(0).reset();
                alertify.success('Ihre Nachricht wurde erfolgreich gesendet...');
                return false;
            }
        });
    }
}

export default SendEmail;