tp = window.tp || [];

tp.push(["addHandler", "customEvent", function(event, b, c, d) {
    switch(event.eventName) {
        case 'email-signup':
        var email = '';
        var params;
        var iframeId;

        params = JSON.parse(event.params.params);
        alert("Open up Dev Tools console to see event object and its params")
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
    }
}])

tp.push(["init", function() {

    tp.offer.show({
    offerId: "OFQZD7CJBSVC",
    templateId: "OT7GV14BCCWI",
    displayMode: "modal",
    containerSelector: "",
    termIds: [],
    loginRequired: function() {},
    close: function() {},
    complete: function(params) {},
    customEvent: function(params) {}
    });
}]);