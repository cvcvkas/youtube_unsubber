console.clear();
console.log('If you like the script make sure to subscribe to my channel: https://www.youtube.com/channel/UC_fTXGz5xtFtyMBPxIiAAVA');

function unsubscriber(){
    let unsub_list = document.querySelectorAll('.unsubscribe-label');
    let unsub_conf = '';
    unsub_list.forEach( unsub_button => {
        unsub_button.click();
        unsub_conf = document.querySelector('#body-container > div.yt-dialog.preserve-players > div > div > div.yt-dialog-fg-content.yt-dialog-show-content > div.yt-dialog-content > div > div.yt-uix-overlay-actions > button.yt-uix-button.yt-uix-button-size-default.yt-uix-button-primary.overlay-confirmation-unsubscribe-button.yt-uix-overlay-close')
        unsub_conf.click();
    });
    location.reload();
    unsubscriber();
    // Have fun unsubbing -lowhatex
};

unsubscriber();
