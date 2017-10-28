/*------------------------------------*\
		Created By Erik Alfredsson
\*------------------------------------*/

chrome.storage.local.get(null, function(result) {
    if (result.access == true) {
        addEvents();
        removePaywall();
        removeAds();
    }
});

function removePaywall() {
    $('.paywall').remove();
    $('.ad--rich-media-premium').remove();
}

function removeAds() {
    $('.ad--skyscraper').remove();
    $('.ad--section-inline').remove();
    $('.ad--widget').remove();
    $('.ad--panorama').remove();
    $('.ad--article-bottom').remove();
    $('.ad--article-inline').remove();
}

function addEvents() {
    $('body').scroll(function() {
        removeAds()
    });
}