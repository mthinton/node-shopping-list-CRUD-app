tp = window.tp || [];

tp.push(["addHandler", "customEvent", function(event, b, c, d) {
    switch(event.eventName) {
        case 'email-signup':
        var email = '';
        var params;
        var iframeId;

        params = JSON.parse(event.params.params);
        
        console.log(event.params);
        
        iframeId = params.iframeId;
        userEmail = event.params.email;
        url =  'http://localhost:8080/';
        userData = {username: userEmail, id:userID}

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(function(response) { return response.json();
        }).then(function(data) {
            alert(`Hi, thanks for sending ${data.username}.`);
            tp.push(["setCustomVariable", "newsletter", "true"]);
            tp.offer.close()
        })

        break;

        case 'update-customField':
            
            var aid;
            var uid;
            var params;

            params = JSON.parse(event.params.params);
            userData = {
                aid:params.aid,
                uid:tp.pianoId.getUser().uid,
                api_token: '7BOuAWqdVzJtY0PFCWINVXHsOwqHzpXXKyzUaSdG'
            }
            
            url = 'https://sandbox.tinypass.com/api/v3/publisher/user/get';

            fetch(url, {
                method:'POST',
                body: JSON.stringify(userData),
                headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8080'}
            }).then(function(response) {return response.json();
            }).then(function(data) {
                console.log(data);
            })
    }
}])

tp.push(["init", function() {
    
    tp.pianoId.show({
        
        profileUpdate: function(){
            var callback = function(response){
                console.log(response)
            };
            tp.api.callApi('https://sandbox.tinypass.com/api/v3/publisher/user/get?aid=bW69IEsHwA&uid=PNIyE513Ppq0oj7&api_token=7BOuAWqdVzJtY0PFCWINVXHsOwqHzpXXKyzUaSdG', callback)
        }
    })

    tp.myaccount.show({
        displayMode: "inline",
        containerSelector: "#container"
        });
}]);