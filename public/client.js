tp = window.tp || [];

tp.push(["addHandler", "customEvent", function(event, b, c, d) {
    switch(event.eventName) {
        case 'email-signup':
        var email = '';
        var params;
        var iframeId;

        params = JSON.parse(event.params.params);
        
        console.log(event.params)
//          email: "mthinton@gmail.com",
//         params: {
//         aid: "bW69IEsHwA"
// displayMode: "modal"
// iframeId: "offer-0-4vK8A"
// offerId: "OFQZD7CJBSVC"
// templateId: "OTSXLYVJH55E"
// url: "http://localhost:8080/"
// width: 1898
//    }

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

 // tp.myaccount.show({
    //     displayMode: "inline",
    //     containerSelector: "#container"
    // });