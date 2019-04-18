tp = window.tp || [];

tp.push(["addHandler", "customEvent", function(event, b, c, d) {
    switch (event.eventName) {
        case 'email-signup':
            var email = '';
            var params;
            var iframeId;

            // We are parsing the params object sent from the template to find out which iframe triggered it
            params = JSON.parse(event.params.params);
            // And here's the iframeId we're looking for
            iframeId = params.iframeId;

            if ((typeof event.params.email != 'undefined') && (event.params.email.length > 0)) {
                email = event.params.email;
                console.log("Hi, is this your email?: ", email);
            }


            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // Here you'll need to pass the relevant data to your newsletter vendor or any other third-party system
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////


            // Additionally, we can check the response from the vendor.
            // For example, if email is invalid:
            var emailIsInvalid = false;
            if (!emailIsInvalid) {
                sendPostMessageToPiano(iframeId, false, 'You have entered an invalid email', 'email');
            } else {
                // If the email was added successfully set a cookie for Composer tracking.
                pianoSetCustomVariableCookie('newsletter', 'true');
                //We can close the offer now.
                tp.offer.close();
            }

            break;
    }
}]);