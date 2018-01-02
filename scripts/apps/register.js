define(["jquery", "reloadChat","sha1"], function ($, reloadChat,sha1) {
    var sendMessage = function (resourceUrl, data) {
        var userName = $("#userName").val(),
            password = $("#password").val(),
            code = SHA1(userName+password);
        var data = {
                username:$("#userName").val(),
                authCode:code
            };
        console.log(data);
        return $.ajax({
            url: resourceUrl+"/user",
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (data) {
                console.log("ok");
                reloadChat(resourceUrl);
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    return sendMessage;
});
