$(document).ready(function () {
    let wrapperIframe = document.getElementById('wrapperIframe');
    let links = document.querySelectorAll('.link-to-iframe');
    let closeButton = document.getElementById('closeButton');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.stopPropagation();
            wrapperIframe.setAttribute('style', 'visibility: visible; opacity: 1; transition: all 0.5s');
        })
    })

    closeButton.addEventListener('click', () => {
        wrapperIframe.setAttribute('style', 'visibility: hidden');
    })

    $(window).click(() => {
        wrapperIframe.setAttribute('style', 'visibility: hidden');
    });
        
        $('#menucontainer').click(function(event){
            event.stopPropagation();
        });
    
})
