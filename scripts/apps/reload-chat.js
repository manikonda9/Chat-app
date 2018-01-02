define(['jquery'], function () {
    var reloadChat = function (resourceUrl,sortCriteria) {
        return $.ajax({
            url: resourceUrl+"/post",
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {
                var chatters = data;
                if(sortCriteria){
                    switch (sortCriteria){
                        case 'upDate': chatters = _.sortBy(chatters,function(ev){ev.postDate.substr(11);}); break; 
                        case 'downDate': chatters = _.sortBy(chatters,function(ev){ev.postDate.substr(11);}); chatters.reverse(); break; 
                        case 'upTitle': chatters = _.sortBy(chatters,function(ev){ev.title.toLowerCase();}); break; 
                        case 'downTitle': chatters = _.sortBy(chatters,function(ev){ev.title.toLowerCase();}); chatters.reverse();break;  
                    }
                }
                
                var chatlist = $('<ul/>').attr("id", "chat-list");
                for (var i = 0; i < chatters.length; i++) {
                    $('<li />')
                    .append($('<strong/>')
                    .html(chatters[i].user.username))
                    .append(" posted at: "+chatters[i].postDate.substr(0,19))
                    .append($('<br/>'))
                    .append($('<span/>')
                    .html(chatters[i].title + " : " + chatters[i].body))
                    .appendTo(chatlist);
                };
                $('#postsArea').html(chatlist);
            },
            error: function (error) {
            }
        });
    };
    return reloadChat;
});
