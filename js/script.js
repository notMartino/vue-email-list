function mailRequest() {
    for (let i = 0; i < 10; i++) {
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            method: 'GET',
            success: function (data) {
                const email = data.response;
                const list = $('#mailList');

                list.append(`<li>${(email)}</li>`);
            },
            error: function () {
                console.log('Error');
            }
        });
    }
}

function init() {
    mailRequest();
}

$(init);