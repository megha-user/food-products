document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`;
    responseMessage.style.color = 'green';

    // Reset the form
    this.reset();
});
