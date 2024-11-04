const sendContactForm  = async (data) => {
    fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'

        },
    })
}

export default sendContactForm;