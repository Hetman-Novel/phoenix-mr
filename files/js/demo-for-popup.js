const order_a_call_send = document.getElementById('order-a-call-send')
if (order_a_call_send) {
    order_a_call_send.addEventListener('click', () => {
        document.querySelector('#order-a-call .popup__wrap-form').classList.remove('show')
        document.querySelector('#order-a-call .popup__sent-successfully').classList.add('show')
    })
}
const order_a_call_ok = document.getElementById('order-a-call-ok')
if (order_a_call_ok) {
    order_a_call_ok.addEventListener('click', () => {
        setTimeout(() => {
            document.querySelector('#order-a-call .popup__sent-successfully').classList.remove('show')
            document.querySelector('#order-a-call .popup__wrap-form').classList.add('show')
        }, 1000);
    })
}

const get_a_presentation_send = document.getElementById('get-a-presentation-send')
if (get_a_presentation_send) {
    get_a_presentation_send.addEventListener('click', () => {
        document.querySelector('#get-a-presentation .popup__wrap-form').classList.remove('show')
        document.querySelector('#get-a-presentation .popup__sent-successfully').classList.add('show')
    })
}
const get_a_presentation_ok = document.getElementById('get-a-presentation-ok')
if (get_a_presentation_ok) {
    get_a_presentation_ok.addEventListener('click', () => {
        setTimeout(() => {
            document.querySelector('#get-a-presentation .popup__sent-successfully').classList.remove('show')
            document.querySelector('#get-a-presentation .popup__wrap-form').classList.add('show')
        }, 1000);
    })
}