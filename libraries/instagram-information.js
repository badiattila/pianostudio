

function loadPicturesHTML(repos) {
    if (repos.length == 0) {
        return `<div class="clearfix repo-list">No repos!</div>`;
    }

    var listItemsHTML = repos.map(function(repo) {
        return `<li>
                    <a href="${repo.media_url}" target="_blank">${repo.media_url}</a>
                </li>`;
    });

    return `<div class="clearfix repo-list">
                <p>
                    <strong>Repo List:</strong>
                </p>
                <ul>
                    ${listItemsHTML.join("\n")}
                </ul>
            </div>`;
}

function fetchInstagramInformation(event) {
    $("#instagram-pictures").html("");
    
    $("#instagram-pictures").html(
        `<div id="loader"><p>Loading</p>
        </div>`);

    $.when(
        $.getJSON(`https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url&access_token=IGQVJWRURFRl9ROUJmNzgyX21yQ3lESnZAQeklILVRFOGpVUXBVY3g0aFFKZAlVFVHZA2WFZARU05uMXgtRFE0dTFCbUhFamdjWWJuZAmNCM1VZAZAmY5VGdIejdDSEVTaVlDTHNYSlY4UGZASLXREQW9SZA0VRYwZDZD`),
    ).then(
        function(firstResponse) {
            var userData = firstResponse[0];
            $("#instagram-pictures").html(loadPicturesHTML(userData));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#instagram-user-data").html(
                    `<h2>No info found</h2>`);
            }
            else {
                console.log(errorResponse);
                $("#instagram-user-data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });
}

$(document).ready(fetchInstagramInformation);
