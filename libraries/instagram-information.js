function fetchInstagramInformation(event) {
    $("#instagram-pictures").html("");
    $("#instagram-pictures").html(`<div id="loader"><p>Loading</p></div>`);

    //        $.getJSON("https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url&access_token=IGQVJWRURFRl9ROUJmNzgyX21yQ3lESnZAQeklILVRFOGpVUXBVY3g0aFFKZAlVFVHZA2WFZARU05uMXgtRFE0dTFCbUhFamdjWWJuZAmNCM1VZAZAmY5VGdIejdDSEVTaVlDTHNYSlY4UGZASLXREQW9SZA0VRYwZDZD")

    $.when(
        $.getJSON(`https://api.github.com/users/octocat`)
    ).then(
        function(firstResponse) {
            var userData = firstResponse[0];
            $("#instagram-pictures").html(`<p>loaded</p>`);
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#instagram-pictures").html(
                    `<h2>No info found for user ${username}</h2>`);
            }
            else if (errorResponse.status === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
                $("#instagram-pictures").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleTimeString()}</h4>`);
            }
            else {
                console.log(errorResponse);
                $("#instagram-pictures").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });

}
