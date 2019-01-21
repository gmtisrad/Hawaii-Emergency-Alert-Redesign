//Event listeners and handlers for alert cards and modals
function handleTestCard () {
    $('.js-test-button').on('click', function(event){
        event.preventDefault();
        $('#test-modal').toggleClass('hidden');
    })
}

function handleTestModal () {
    $('.test-close').on('click', function(event){
        $('#test-modal').toggleClass('hidden');
        deselectOptions();
    })
}

function handleWarningCard () {
    $('.js-warning-button').on('click', function(event){
        event.preventDefault();
        $('#warning-modal').toggleClass('hidden');
    })
}

function handleWarningModal () {
    $('.warning-close').on('click', function(event){
        $('#warning-modal').toggleClass('hidden');
        deselectOptions();
    })
}

function handleEmergencyCard () {
    $('.js-danger-button').on('click', function(event){
        event.preventDefault();
        $('#emergency-modal').toggleClass('hidden');
    })
}

function handleEmergencyModal () {
    $('.emergency-close').on('click', function(event){
        $('#emergency-modal').toggleClass('hidden');
        deselectOptions();
    })
}

//Event handlers for list
function handleAlertSelect () {
    $('.test-options').on('click','li', function(event){
        let selected = $(this);
        selected.addClass('selected');
        selected.siblings('.selected').removeClass('selected');
    })
}

function deselectOptions () {
    $('.test-options').find('.selected').removeClass('selected');
}

function sendAlert () {
    $('.send-warning').on('click', function(event){
        event.preventDefault();
        let notification = $('.test-options').find('.selected').text();
        alert (`**** ${notification} ****`);
        deselectOptions();
        $(this).closest('.modal').toggleClass('hidden');
    })
}

function handleEvents () {
    handleTestCard();
    handleTestModal();
    handleWarningCard();
    handleWarningModal();
    handleEmergencyCard();
    handleEmergencyModal();
    handleAlertSelect();
    sendAlert();
}
$(handleEvents());