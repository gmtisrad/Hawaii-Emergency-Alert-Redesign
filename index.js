function handleTestCard () {
    $('.js-test-button').on('click', function(event){
        event.preventDefault();
        $('#test-modal').toggleClass('hidden');
    })
}

function handleTestModal () {
    $('.test-close').on('click', function(event){
        $('#test-modal').toggleClass('hidden');
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
    })
}

function handleEvents () {
    handleTestCard();
    handleTestModal();
    handleWarningCard();
    handleWarningModal();
    handleEmergencyCard();
    handleEmergencyModal();
}
$(handleEvents());