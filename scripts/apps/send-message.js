define(["jquery", "reloadChat","sha1"], function ($, reloadChat,sha1) {
    var sendMessage = function (resourceUrl, data) {
        console.log(SHA1("stoyan"));
        return $.ajax({
            url: resourceUrl,
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (data) {

                reloadChat(resourceUrl);
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    return sendMessage;
});
