(function () {
    require.config({
        paths: {
            jquery: "../libs/jquery",
            mustache: "../libs/mustache",
            reloadChat: "apps/reload-chat",
            sendMessage: "apps/send-message",
            underscore: "../libs/underscore",
            sha1: "apps/sha1",
            register: "apps/register",
            login: "apps/login"
        }
    })

    require(['jquery', 'mustache', 'reloadChat', 'sendMessage', 'underscore', 'register','login'], function ($, mustache, reloadChat, sendMessage, underscore,register,login) {
        var resourceUrl = 'http://jsapps.bgcoder.com';
        reloadChat(resourceUrl);
        
        $("#accendingDate").click(function(){reloadChat('scripts/apps/reload-chat.js','upDate')});
        $("#descendingData").click(function(){reloadChat('scripts/apps/reload-chat.js','downDate')});
        $("#accendingTitle").click(function(){reloadChat('scripts/apps/reload-chat.js','upTitle')});
        $("#descendingTitle").click(function(){reloadChat('scripts/apps/reload-chat.js','downTitle')});

        $("#registerBut").click(function(){register('scripts/apps/register.js')});
        $("#loginBut").click(function(){login('scripts/apps/login.js')});
        $("#logoutBut").click(function(){$("#code").text("status: loged out");});
        //$("#registerBut").click(function(){sendMessage(resourceUrl+"/user",{username:"stoyan", authCode: ""})});
    });
}());



// define(['jquery', 'mustache', 'reloadChat', 'sendMessage'], function ($, mustache, reloadChat, sendMessage) {
//     $(function (div, resourceUrl) {
//         reloadChat(resourceUrl);

//     })






        // return sammy(div, function () {
        //     this.get("#/home", function () {
        //         $('#chat-div').remove();
        //         $('#send-div').remove();
        //         $('#about-div').remove();
        //         $(div)
        //             .append($('<label />').html('Username')
        //                     .attr("id", "label-user-name"))
        //             .append($('<input /> ')
        //                     .attr("type", "text")
        //                     .attr("maxlength", "10")
        //                     .attr("id", "tb-user-name"));
        //     });


        //     this.get("#/chat", function () {
        //         var userName = $('#tb-user-name').val() || 'Anonymous';
        //         $('#tb-user-name').remove();
        //         $('#label-user-name').remove();
        //         $('#about-div').remove();
        //         $(div)
        //             .append($('<div />')
        //                     .attr("id", "chat-div"))
        //             .append($('<div />')
        //                     .attr("id", "send-div")
        //                     .append($('<input /> ')
        //                         .attr("type", "text")
        //                         .attr("maxlength", "70")
        //                         .attr("id", "tb-send"))
        //                     .append($('<button />')
        //                         .attr("id", "send-btn")
        //                         .html("Send")
        //                         .on('click', function () {
        //                             var message = {
        //                                 user: userName,
        //                                 text: $('#tb-send').val()
        //                             };
        //                             sendMessage(resourceUrl, message);
        //                         })));
        //         reloadChat(resourceUrl);
        //     });


        //     this.get("#/about", function () {
        //         $('#chat-div').remove();
        //         $('#send-div').remove();
        //         $('#tb-user-name').remove();
        //         $('#label-user-name').remove();
        //         $(div)
        //             .append($('<div />')
        //                     .attr("id", "about-div")
        //                     .html("Thanks to:<br/> jQuery, Sammy and RequireJS."));
        //     });
//         });
//     }


//     return app;
// });
