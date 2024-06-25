const accordion = document.querySelector('[data-js="accordion"]')

accordion.addEventListener('click', event => {
  const accordionHeaderId = event.target.dataset.accordionHeader
  const accordionBodyToByOpened = 
    document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)
  const clickedAccordionToByclosed = 
    document.querySelector(`[data-accordion-header="${accordionHeaderId}"]`)
    const accordionHeaderToByClosed = Array
      .from(document.querySelectorAll(`[data-js=accordion-header]`))
      .filter(accordionHeader => accordionHeader !== clickedAccordionToByclosed)
      .find(accordionHeader => accordionHeader.classList.contains('active'))

      if(!event.target.dataset.accordionHeader) {
        return
      }

      if(accordionHeaderToByClosed) {
        const accordionHeaderId = accordionHeaderToByClosed.dataset.accordionHeader
        const accordionBodyToBeClosed = document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)
        
        accordionHeaderToByClosed.classList.remove('active')
        accordionBodyToBeClosed.classList.remove('active')
      }

    accordionBodyToByOpened.classList.toggle('active')
    clickedAccordionToByclosed.classList.toggle('active')
})
