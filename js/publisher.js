/**
 * Created by nsd on 20.08.17.
 */

const kAuthLogin = "login";
const kAuthPassword = "password";
const kErr = "err";
const kBadAuth = "0";
const kSuccess = "1";

function auth(login, password) {

    $.ajax({
            url : "/API/Auth",
            type: "post",
            data: {

                login: login,
                password: password

            },
            success: function (data) {

                switch (data) {
                    case kErr:
                    case kBadAuth:
                        Materialize.toast('Неверный логин/пароль', 4000);
                        break;

                    case kSuccess:
                        switchPageData();
                        break;
                }
            }
        }
    );

    function switchPageData() {

        var content = document.getElementById('content');
        var login = document.getElementById('login');

        removeClass(content,'hide');
        login.className += 'hide';

    }
}