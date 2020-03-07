function fetchInstagramInformation(event) {
    $("#instagram-pictures").html("");
    $("#instagram-pictures").html(`<div id="loader"><p>Loading</p></div>`);

    //        $.getJSON("https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url&access_token=IGQVJWRURFRl9ROUJmNzgyX21yQ3lESnZAQeklILVRFOGpVUXBVY3g0aFFKZAlVFVHZA2WFZARU05uMXgtRFE0dTFCbUhFamdjWWJuZAmNCM1VZAZAmY5VGdIejdDSEVTaVlDTHNYSlY4UGZASLXREQW9SZA0VRYwZDZD")

    $.when(
        $.getJSON('https://api.github.com/users/octocat')
    ).then(
        function(response) {
            var userData = response;
            $("#sample").html(`<div id="loader2"><p>Loaded</p></div>`);
        }
    );

}
