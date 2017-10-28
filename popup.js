/*------------------------------------*\
		Created By Erik Alfredsson
\*------------------------------------*/

/**
 * Init
 */
updateUI();

/*------------------------------------*\
		Event handlers
\*------------------------------------*/

$(".action").click(function() {
    switch (this.id) {
        case 'access':
            toggleAccess();
            break;
    }
});

$('#github').on('click', function() {
    chrome.tabs.create({ url: $(this).attr('href') });
    return false;
});

/*------------------------------------*\
		Methods
\*------------------------------------*/

/**
 * Updates UI
 */
function updateUI() {
    chrome.storage.local.get(null, function(result) {
        if (result.access == true) {
            $('#access').addClass('active');
            $('#message').text('Stäng av');
        } else {
            $('#access').removeClass('active');
        }
    });
}

/**
 * Toggles Access
 */
function toggleAccess() {
    chrome.storage.local.get('access', function(result) {
        if (!(result.access == undefined || result.access == false)) {
            chrome.storage.local.set({ 'access': false }, function() {
                $('#access').removeClass('active');
                $('#message').text('Lås upp');
            });
        } else {
            chrome.storage.local.set({ 'access': true }, function() {
                $('#access').addClass('active');
                $('#message').text('Stäng av');
            });
        }
    });
}