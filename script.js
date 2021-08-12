const accordion = document.querySelector('[data-js="accordion"]')
accordion.addEventListener('click', e => {
    const accordionHeaderId = e.target.dataset.accordionHeader
    const clickAccordionHeader = document.querySelector(`[data-accordion-header="${accordionHeaderId}"]`)
    const accordionItemToBeOpen = document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)
    const accordionHeaderToBeClosed = Array
        .from(document.querySelector('[data-js="accordion-header"]'))
        .filter(accordionHeader => accordionHeader !== clickAccordionHeader)
        .find(accordionHeader => accordionHeader.classList.contains('active'))

    if (!e.target.dataset.accordionHeader){
        return
    }

    if (accordionHeaderToBeClosed){
        const accordionHeaderToBeClosed = document.querySelector(`[data-accordion-body="${accordionHeaderToBeClosed.dataset.accordionHeader}"]`)

        accordionHeaderToBeClosed.classList.remove('active')
        accordionHeaderToBeClosed.classList.remove('active')
    }

    clickAccordionHeader.classList.toggle('active')
    accordionItemToBeOpen.classList.toggle('active')
})