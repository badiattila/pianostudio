function mediaInformationHTML(userData) {
    if (userData.length == 0) {
        return `<div class="clearfix repo-list">No pictures found!</div>`;
    }

    var listItemsHTML = userData.data.map(function(media) {

        return `<img class="sample-pic" src="${media.media_url}" alt="${media.caption}">`;
    });

    return `<div class="clearfix repo-list">
                <h2>Instagram media</h2>
                <ul>
                    ${listItemsHTML.join("\n")}
                </ul>
            </div>`;
}


function fetchInstagramInformation(event) {

    $.when(
        $.getJSON("https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url&access_token=IGQVJWRURFRl9ROUJmNzgyX21yQ3lESnZAQeklILVRFOGpVUXBVY3g0aFFKZAlVFVHZA2WFZARU05uMXgtRFE0dTFCbUhFamdjWWJuZAmNCM1VZAZAmY5VGdIejdDSEVTaVlDTHNYSlY4UGZASLXREQW9SZA0VRYwZDZD")
    ).then(
        function(response) {
            var userData = response;
            $("#sample").html(`<div id="loader2"><p>Loaded</p></div>`);
            $("#sample").html(mediaInformationHTML(userData));
        }
    );

}
