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
                        //todo do err
                        break;

                    case kSuccess:
                        //todo do success;
                        break;
                }
            }
        }
    );
}